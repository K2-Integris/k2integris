import { useMemo, useState } from 'react';

export default function BookingForm({
  startHour = 10,
  endHour = 18,
  slotMinutes = 30,
  disablePriorDates = true,
  bookings = [],          // existing (immutable here)
  myBookings = [],        // controlled from parent
  onAdd,                  // (booking) => void
  onRemove,               // (booking) => void
}) {
  const fmt2 = (n) => String(n).padStart(2, '0');
  const parseHHMM = (t) => {
    const [hh, mm] = t.split(':').map(Number);
    return hh * 60 + mm;
  };
  const toHHMM = (mins) => `${fmt2(Math.floor(mins / 60))}:${fmt2(mins % 60)}`;
  const windowStartMin = startHour * 60;
  const windowEndMin = endHour * 60;

  const todayKey = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return `${d.getFullYear()}-${fmt2(d.getMonth() + 1)}-${fmt2(d.getDate())}`;
  }, []);

  const [date, setDate] = useState(todayKey);
  const [from, setFrom] = useState(toHHMM(windowStartMin));
  const [till, setTill] = useState(toHHMM(windowStartMin + slotMinutes));
  const [error, setError] = useState('');

  const snap = (mins) => Math.round(mins / slotMinutes) * slotMinutes;

  const obstaclesForDate = (dateKey) => {
    const ranges = [];
    for (const b of bookings) if (b.date === dateKey) ranges.push([parseHHMM(b.fromtime), parseHHMM(b.tilltime)]);
    for (const b of myBookings) if (b.date === dateKey) ranges.push([parseHHMM(b.fromtime), parseHHMM(b.tilltime)]);
    if (!ranges.length) return [];
    ranges.sort((a,b)=>a[0]-b[0]);
    const merged = [ranges[0].slice()];
    for (let i=1;i<ranges.length;i++){
      const [s,e] = ranges[i];
      const last = merged[merged.length-1];
      if (s <= last[1]) last[1] = Math.max(last[1], e);
      else merged.push([s,e]);
    }
    return merged;
  };

  const validateAndAdd = (e) => {
    e.preventDefault();
    setError('');

    if (!date) return setError('Please pick a date.');
    const dObj = new Date(date);
    dObj.setHours(0,0,0,0);
    const now = new Date(); now.setHours(0,0,0,0);
    if (disablePriorDates && dObj.getTime() <= now.getTime()) {
      return setError('Date is disabled.');
    }

    let fromMin = parseHHMM(from);
    let tillMin = parseHHMM(till);

    // normalize
    if (tillMin <= fromMin) return setError('End time must be after start time.');

    // window clamp & snap
    fromMin = snap(Math.max(windowStartMin, Math.min(fromMin, windowEndMin)));
    tillMin = snap(Math.max(windowStartMin, Math.min(tillMin, windowEndMin)));
    if (tillMin - fromMin < slotMinutes) return setError(`Minimum slot is ${slotMinutes} minutes.`);

    // overlap check
    const obstacles = obstaclesForDate(date);
    const overlaps = obstacles.some(([s,e]) => Math.max(fromMin, s) < Math.min(tillMin, e));
    if (overlaps) return setError('Selection overlaps an existing booking.');

    onAdd?.({
      date,
      fromtime: toHHMM(fromMin),
      tilltime: toHHMM(tillMin),
      type: 'mine',
    });

    // reset sensible default
    setFrom(toHHMM(fromMin));
    setTill(toHHMM(Math.min(fromMin + slotMinutes, windowEndMin)));
  };

  const stepAttr = slotMinutes * 60; // seconds

  return (
    <form onSubmit={validateAndAdd} className="booking-form" style={{ display: 'grid', gap: '0.8rem' }}>
        <label className="input-box">
          Date&nbsp;
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={disablePriorDates ? todayKey : undefined}
          />
        </label>

        <label className="input-box">
          From&nbsp;
          <input
            type="time"
            value={from}
            step={stepAttr}
            min={toHHMM(windowStartMin)}
            max={toHHMM(windowEndMin)}
            onChange={(e) => setFrom(e.target.value)}
          />
        </label>

        <label className="input-box">
          Till&nbsp;
          <input
            type="time"
            value={till}
            step={stepAttr}
            min={toHHMM(windowStartMin)}
            max={toHHMM(windowEndMin)}
            onChange={(e) => setTill(e.target.value)}
          />
        </label>

      {error && <div style={{ color: 'var(--gold)' }}>{error}</div>}

    <button type="submit" className='gold-button'>Add Availability</button>

      {myBookings.length > 0 && (
        <div className='bookings'>
          <h4>
            Your Availability
          </h4>
          <ul>
            {myBookings.map((b, i) => (
              <li key={`${b.date}-${b.fromtime}-${b.tilltime}-${i}`}>
                <span>{b.date} | {b.fromtime} - {b.tilltime}</span>
                <button type="button" onClick={() => onRemove?.(b)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
