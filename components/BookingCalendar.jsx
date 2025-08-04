import { useMemo, useState, useCallback } from 'react';

export default function BookingCalendar({
  startHour = 10,
  endHour = 18,
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  slotMinutes = 30,
  initialDate,
  disablePriorDates = true,
  // NEW: initial booked items (hard-coded defaults)
  bookings = [
    { date: '2025-08-08', fromtime: '11:00', tilltime: '12:30', type: 'booked' }, // Mon
    { date: '2025-08-05', fromtime: '15:00', tilltime: '16:00', type: 'booked' },   // Tue
    { date: '2025-08-07', fromtime: '10:30', tilltime: '11:30', type: 'booked' }, // Thu
  ],
}) {
  // ---- dates & helpers ----
  const TODAY_CONST = useMemo(() => {
    const d = initialDate ? new Date(initialDate) : new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, [initialDate]);

  const [focusedDate, setFocusedDate] = useState(TODAY_CONST);

  const startOfWeekMonday = useCallback((d) => {
    const x = new Date(d);
    const day = x.getDay(); // 0..6 Sun..Sat
    const diffToMon = (day + 6) % 7; // 0 for Mon, 6 for Sun
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

  // ---- time grid ----
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

  // ---- booking helpers (render existing bookings) ----
  const parseHHMM = (t) => {
    const [hh, mm] = t.split(':').map(Number);
    return hh * 60 + mm; // minutes since midnight
  };

  // Each row is 4rem tall in your SCSS; 1 row == slotMinutes
  // Convert minutes to rem relative to calendar window.
  const minutesToRem = (mins) => {
    const startMin = startHour * 60;
    const sinceStart = Math.max(0, mins - startMin);
    return (sinceStart / slotMinutes) * 4; // 4rem per slot
  };

  const clampToWindow = (fromMin, toMin) => {
    const winStart = startHour * 60;
    const winEnd = endHour * 60;
    const start = Math.max(winStart, fromMin);
    const end = Math.min(winEnd, toMin);
    return end <= start ? null : [start, end];
  };

  const goPrevWeek = () => setFocusedDate((d) => addWeeks(d, -1));
  const goNextWeek = () => setFocusedDate((d) => addWeeks(d, +1));
  const goToday = () => setFocusedDate(TODAY_CONST);
  const onDatePick = (e) => {
    const val = e.target.value; // yyyy-mm-dd
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
        {/* time column */}
        <div className="time-column">
          {timeSlots.map((t) => (
            <div key={t} className="time-label">{t}</div>
          ))}
          <div className="time-label">{fmt2(endHour)}:00</div>
        </div>

        {/* day columns */}
        {days.map((label, i) => {
          const d = visibleDates[i];
          const isActive = sameDay(d, focusedDate);
          const isDisabled = disablePriorDates && isOnOrBeforeToday(d);

          const className = ['day-container', isDisabled ? 'disabled' : ''].filter(Boolean).join(' ');

          const onDayClick = () => {
            if (isDisabled) return;
            setFocusedDate(d);
          };

          // Render bookings that match this exact date (YYYY-MM-DD)
          const dateKey = fmtDateYYMMDD(d);
          const dayBookings = bookings.filter((b) => b.date === dateKey);

          return (
            <div
              key={`${label}-${i}`}
              className={className}
              style={{ position: 'relative' }}
              data-active={isActive ? 'true' : 'false'}
              aria-disabled={isDisabled ? 'true' : 'false'}
              onClick={onDayClick}
            >
              {timeSlots.map((t, idx) => (
                <div key={`${t}-${idx}`} className="slot-container">
                  <div className="booking-area" />
                </div>
              ))}

              {/* Existing bookings */}
              {dayBookings.map((b, idx) => {
                const fromMin = parseHHMM(b.fromtime);
                const toMin = parseHHMM(b.tilltime);
                const clamped = clampToWindow(fromMin, toMin);
                if (!clamped) return null;

                const [startMinClamped, endMinClamped] = clamped;
                const topRem = minutesToRem(startMinClamped);
                const heightRem = minutesToRem(endMinClamped) - topRem;

                return (
                  <div
                    key={`${b.date}-${b.fromtime}-${b.tilltime}-${idx}`}
                    className={`booking-block ${b.type ? `${b.type}` : ''}`}
                    style={{ top: `${topRem + 0.4}rem`, height: `${heightRem - 0.9}rem` }}
                    title={`${b.fromtime} - ${b.tilltime}${b.type ? ` • ${b.type}` : ''}`}
                  >
                    {b.fromtime} - {b.tilltime}
                    <br />
                    BOOKED
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
