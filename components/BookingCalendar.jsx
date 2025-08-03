import { useState } from 'react';

export default function BookingCalendar({
  startHour = 10,
  endHour = 18,
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  blockedSlots = [], // [{ day: 'Monday', time: '10:00' }]
}) {
  const [weekOffset, setWeekOffset] = useState(0);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${String(hour).padStart(2, '0')}:00`);
      slots.push(`${String(hour).padStart(2, '0')}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const isBlocked = (day, time) =>
    blockedSlots.some(slot => slot.day === day && slot.time === time);

  return (
    <div id="booking-calendar">
      <div className="controls">
        <button onClick={() => setWeekOffset(w => w - 1)}>◀ Previous Week</button>
        <span>Week Offset: {weekOffset}</span>
        <button onClick={() => setWeekOffset(w => w + 1)}>Next Week ▶</button>
      </div>

      <div className="booking-grid">
        <div className="time-column">
          {timeSlots.map((time) => (
            <div key={time} className="time-label">
              {time}
            </div>
          ))}

          <div className="time-label">
              {endHour}:00
            </div>
        </div>

        {days.map((day) => (
          <div key={day} className="day-container">
            <div className="day-label">{day}</div>
            {timeSlots.map((time) => (
              <div key={time} className="slot-container">
                <div className="booking-area">
                  {isBlocked(day, time) ? '⛔' : ''}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
