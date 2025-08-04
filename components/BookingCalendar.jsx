import { useMemo, useState, useCallback } from 'react';

export default function BookingCalendar({
  startHour = 10,
  endHour = 18,
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  slotMinutes = 30,
  initialDate,
  disablePriorDates = true,
  bookings = [
    { date: '2025-08-08', fromtime: '11:00', tilltime: '12:30', type: 'booked' },
    { date: '2025-08-05', fromtime: '15:00', tilltime: '16:00', type: 'booked' },
    { date: '2025-08-07', fromtime: '10:30', tilltime: '11:30', type: 'booked' },
  ],
}) {
  const TODAY_CONST = useMemo(() => {
    const d = initialDate ? new Date(initialDate) : new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, [initialDate]);

  const [focusedDate, setFocusedDate] = useState(TODAY_CONST);

  const startOfWeekMonday = useCallback((d) => {
    const x = new Date(d);
    const day = x.getDay(); 
    const diffToMon = (day + 6) % 7;
    x.setDate(x.getDate() - diffToMon);
    x.setHours(0, 0, 0, 0);
    return x;
  }, []);

  const addDays = (d, n) => {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    x.setHours(0, 0, 0, 0);
    return x;
  };
  const addWeeks = (d, n) => addDays(d, n * 7);

  const fmt2 = (n) => String(n).padStart(2, '0');
  const fmtDateYYMMDD = (d) => `${d.getFullYear()}-${fmt2(d.getMonth() + 1)}-${fmt2(d.getDate())}`;
  const fmtDayShort = (d) => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
  const fmtMonthShort = (d) =>
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
  const sameDay = (a, b) => a.getTime() === b.getTime();
  const isOnOrBeforeToday = (d) => d.getTime() <= TODAY_CONST.getTime();

  const weekStart = useMemo(() => startOfWeekMonday(focusedDate), [focusedDate, startOfWeekMonday]);
  const visibleDates = useMemo(() => days.map((_, idx) => addDays(weekStart, idx)), [days, weekStart]);

  const weekRangeLabel = useMemo(() => {
    const start = visibleDates[0];
    const end = visibleDates[visibleDates.length - 1];
    if (!start || !end) return '';
    return `${fmtMonthShort(start)} ${start.getDate()} – ${fmtMonthShort(end)} ${end.getDate()}, ${end.getFullYear()}`;
  }, [visibleDates]);

  const timeSlots = useMemo(() => {
    const slots = [];
    for (let h = startHour; h < endHour; h++) {
      slots.push(`${fmt2(h)}:00`);
      if (slotMinutes < 60) {
        const steps = Math.floor(60 / slotMinutes) - 1;
        for (let i = 1; i <= steps; i++) slots.push(`${fmt2(h)}:${fmt2(i * slotMinutes)}`);
      }
    }
    return slots;
  }, [startHour, endHour, slotMinutes]);

  const ROW_REM = 4; 
  const windowStartMin = startHour * 60;
  const windowEndMin = endHour * 60;

  const pxToMin = (offsetRem) => {
    return (offsetRem / ROW_REM) * slotMinutes + windowStartMin;
  };
  const minToRem = (mins) => ((mins - windowStartMin) / slotMinutes) * ROW_REM;

  const clampToWindow = (fromMin, toMin) => {
    const start = Math.max(windowStartMin, fromMin);
    const end = Math.min(windowEndMin, toMin);
    return end <= start ? null : [start, end];
  };

  const snapMin = (mins) => {
    const step = slotMinutes;
    return Math.round(mins / step) * step;
  };

  const [myBookings, setMyBookings] = useState([]);

  const parseHHMM = (t) => {
    const [hh, mm] = t.split(':').map(Number);
    return hh * 60 + mm;
  };
  const toHHMM = (mins) => {
    const hh = Math.floor(mins / 60);
    const mm = mins % 60;
    return `${fmt2(hh)}:${fmt2(mm)}`;
  };

  const mergedRangesForDate = (dateKey) => {
    const ranges = [];

    for (const b of bookings) {
      if (b.date !== dateKey) continue;
      ranges.push([parseHHMM(b.fromtime), parseHHMM(b.tilltime)]);
    }

    for (const b of myBookings) {
      if (b.date !== dateKey) continue;
      ranges.push([parseHHMM(b.fromtime), parseHHMM(b.tilltime)]);
    }

    if (!ranges.length) return [];
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [ranges[0].slice()];
    for (let i = 1; i < ranges.length; i++) {
      const [s, e] = ranges[i];
      const last = merged[merged.length - 1];
      if (s <= last[1]) last[1] = Math.max(last[1], e);
      else merged.push([s, e]);
    }
    return merged;
  };

  const [drag, setDrag] = useState(null);

  const beginDrag = (e, dateKey, disabled) => {
    if (disabled) return;
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const y = e.clientY - rect.top; 

    const slotIdx = Math.max(0, Math.min(timeSlots.length, Math.floor(y / (ROW_REM * 16)))); 
    const totalRows = (windowEndMin - windowStartMin) / slotMinutes;

    const yRatio = Math.max(0, Math.min(1, y / rect.height));
    const approxMin = windowStartMin + yRatio * (windowEndMin - windowStartMin);
    const startMinRaw = snapMin(approxMin);

    // reject if inside an obstacle
    const obstacles = mergedRangesForDate(dateKey);
    const inside = obstacles.some(([s, e]) => startMinRaw >= s && startMinRaw < e);
    if (inside) return;

    setDrag({ dateKey, startMin: startMinRaw, currentMin: startMinRaw, topRem: 0, heightRem: 0 });
  };

  const onDragMove = (e) => {
    if (!drag) return;
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    let y = e.clientY - rect.top;
    y = Math.max(0, Math.min(y, rect.height));
    const yRatio = y / rect.height;
    const minRaw = windowStartMin + yRatio * (windowEndMin - windowStartMin);
    let cur = snapMin(minRaw);

    const start = drag.startMin;
    const down = cur >= start;

    const obstacles = mergedRangesForDate(drag.dateKey);

    // clamp against nearest obstacles
    const sorted = obstacles.slice().sort((a, b) => a[0] - b[0]);
    let minClamp = windowStartMin;
    let maxClamp = windowEndMin;

    // next obstacle after start
    const next = sorted.find(([s]) => s >= start);
    if (next) maxClamp = Math.min(maxClamp, next[0]);
    // prev obstacle before start
    const prev = [...sorted].reverse().find(([, e]) => e <= start);
    if (prev) minClamp = Math.max(minClamp, prev[1]);

    if (down) cur = Math.min(cur, maxClamp);
    else cur = Math.max(cur, minClamp);

    const from = Math.min(start, cur);
    const to = Math.max(start, cur);

    const clamped = clampToWindow(from, to);
    if (!clamped) {
      setDrag((d0) => ({ ...d0, currentMin: cur, topRem: 0, heightRem: 0 }));
      return;
    }
    const [f, t] = clamped;
    const topRem = minToRem(f);
    const heightRem = minToRem(t) - topRem;

    setDrag((d0) => ({ ...d0, currentMin: cur, topRem, heightRem }));
  };

  const endDrag = () => {
    if (!drag) return;
    const { dateKey, startMin, currentMin } = drag;
    const from = Math.min(startMin, currentMin);
    const to = Math.max(startMin, currentMin);

    const snappedFrom = snapMin(from);
    const snappedTo = snapMin(to);
    if (snappedTo - snappedFrom < slotMinutes) {
      setDrag(null);
      return;
    }

    const obstacles = mergedRangesForDate(dateKey);
    const overlaps = obstacles.some(([s, e]) => Math.max(snappedFrom, s) < Math.min(snappedTo, e));
    if (overlaps) {
      setDrag(null);
      return;
    }

    setMyBookings((prev) => [
      ...prev,
      {
        date: dateKey,
        fromtime: toHHMM(snappedFrom),
        tilltime: toHHMM(snappedTo),
        type: 'mine',
      },
    ]);
    setDrag(null);
  };

  const goPrevWeek = () => setFocusedDate((d) => addWeeks(d, -1));
  const goNextWeek = () => setFocusedDate((d) => addWeeks(d, +1));
  const goToday = () => setFocusedDate(TODAY_CONST);
  const onDatePick = (e) => {
    const val = e.target.value;
    if (!val) return;
    const [y, m, dd] = val.split('-').map(Number);
    const d = new Date(y, m - 1, dd);
    d.setHours(0, 0, 0, 0);
    setFocusedDate(d);
  };

  return (
    <div id="booking-calendar">
      <div className="controls">
        <button type="button" onClick={goPrevWeek} aria-label="Previous week">prev</button>

        <label className="range-jumper" htmlFor="jumper">
          {weekRangeLabel}
          <input id="jumper" type="date" value={fmtDateYYMMDD(focusedDate)} onChange={onDatePick} />
        </label>

        <button type="button" onClick={goNextWeek} aria-label="Next week">Next</button>
      </div>

      <div className="day-labels">
        {days.map((label, i) => {
          const d = visibleDates[i];
          return (
            <div className="day-label" key={label}>
              {fmtDayShort(d)} {fmt2(d.getDate())} {fmtMonthShort(d)}
            </div>
          );
        })}
      </div>

      <div className="booking-grid">
        <div className="time-column">
          {timeSlots.map((t) => (
            <div key={t} className="time-label">{t}</div>
          ))}
          <div className="time-label">{fmt2(endHour)}:00</div>
        </div>

        {days.map((label, i) => {
          const d = visibleDates[i];
          const isActive = sameDay(d, focusedDate);
          const isDisabled = disablePriorDates && isOnOrBeforeToday(d);
          const dateKey = fmtDateYYMMDD(d);

          const className = ['day-container', isDisabled ? 'disabled' : ''].filter(Boolean).join(' ');
          const onDayClick = () => {
            if (isDisabled) return;
            setFocusedDate(d);
          };

          const dayBooked = bookings.filter((b) => b.date === dateKey);
          const dayMine = myBookings.filter((b) => b.date === dateKey);

          return (
            <div
              key={`${label}-${i}`}
              className={className}
              style={{ position: 'relative' }}
              data-active={isActive ? 'true' : 'false'}
              aria-disabled={isDisabled ? 'true' : 'false'}
              onClick={onDayClick}
              onMouseDown={(e) => beginDrag(e, dateKey, isDisabled)}
              onMouseMove={onDragMove}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
            >
              {timeSlots.map((t, idx) => (
                <div key={`${t}-${idx}`} className="slot-container">
                  <div className="booking-area" />
                </div>
              ))}

              {dayBooked.map((b, idx) => {
                const clamped = clampToWindow(parseHHMM(b.fromtime), parseHHMM(b.tilltime));
                if (!clamped) return null;
                const [s, e] = clamped;
                const topRem = minToRem(s);
                const heightRem = minToRem(e) - topRem;
                return (
                  <div
                    key={`booked-${idx}`}
                    className={`booking-block booked`}
                    style={{ top: `${topRem + 0.4}rem`, height: `${heightRem - 0.8}rem` }}
                    title={`${b.fromtime} - ${b.tilltime}`}
                  >
                    {b.fromtime} - {b.tilltime}
                    <br />BOOKED
                  </div>
                );
              })}

              {dayMine.map((b, idx) => {
                const clamped = clampToWindow(parseHHMM(b.fromtime), parseHHMM(b.tilltime));
                if (!clamped) return null;
                const [s, e] = clamped;
                const topRem = minToRem(s);
                const heightRem = minToRem(e) - topRem;
                return (
                  <div
                    key={`mine-${idx}`}
                    className={`booking-block mine`}
                    style={{ top: `${topRem + 0.3}rem`, height: `${heightRem - 0.8}rem` }}
                    title={`${b.fromtime} - ${b.tilltime}`}
                  >
                    {b.fromtime} - {b.tilltime}
                  </div>
                );
              })}

              {drag && drag.dateKey === dateKey && drag.heightRem > 0 && (
                <div
                  className="booking-block dragging"
                  style={{ top: `${drag.topRem + 0.2}rem`, height: `${drag.heightRem - 0.2}rem` }}
                >
                  {toHHMM(Math.min(drag.startMin, drag.currentMin))} - {toHHMM(Math.max(drag.startMin, drag.currentMin))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
