import { useState } from 'react';

export default function BookingCalendar({
  startHour = 10,
  endHour = 18,
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  blockedSlots = [], // [{ day: 'Monday', time: '10:00' }]
}) {
    const [weekOffset, setWeekOffset] = useState(0);

    const [dragging, setDragging] = useState(null);
    const [blocks, setBlocks] = useState([]);

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

    const handleMouseDown = (e, day) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;
        setDragging({ day, startY: y, containerTop: rect.top });
        };

        const handleMouseMove = (e) => {
        if (!dragging) return;
        const currentY = e.clientY - dragging.containerTop;
        const minY = Math.min(dragging.startY, currentY);
        const maxY = Math.max(dragging.startY, currentY);

        const snappedTop = Math.floor(minY / 5) * 5;
        const snappedHeight = Math.ceil((maxY - minY) / 5) * 5;

        setDragging((prev) => ({
            ...prev,
            currentY,
            top: snappedTop,
            height: snappedHeight,
        }));
        };

        const handleMouseUp = () => {
        if (!dragging || dragging.height < 5) {
            setDragging(null);
            return;
        }

        const minutesFromStart = (dragging.top / 4) * 30; // 4rem height per 30min slot
        const durationMinutes = (dragging.height / 4) * 30;

        const fromHour = startHour + Math.floor(minutesFromStart / 60);
        const fromMin = minutesFromStart % 60;
        const toHour = startHour + Math.floor((minutesFromStart + durationMinutes) / 60);
        const toMin = (minutesFromStart + durationMinutes) % 60;

        const formatTime = (h, m) =>
            `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

        setBlocks((prev) => [
            ...prev,
            {
            day: dragging.day,
            top: dragging.top,
            height: dragging.height,
            from: formatTime(fromHour, fromMin),
            to: formatTime(toHour, toMin),
            },
        ]);
        setDragging(null);
        };


    return (
        <div id="booking-calendar">
            <div className="controls">
                <button 
                    onClick={() => setWeekOffset(w => w - 1)}
                    type="button"
                >
                    Previous Week
                </button>
                <button 
                    onClick={() => setWeekOffset(w => w + 1)}
                    type="button"
                >
                    Next Week
                </button>
            </div>

            <div 
                className="booking-grid"
            >
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
                    <div
                        key={day}
                        className="day-container"
                        style={{ position: 'relative' }}
                        onMouseDown={(e) => handleMouseDown(e, day)}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                    >
                        <div className="day-label">{day}</div>

                        {timeSlots.map((time) => (
                        <div key={time} className="slot-container">
                            <div className="booking-area">
                            {isBlocked(day, time) ? '⛔' : ''}
                            </div>
                        </div>
                        ))}

                        {dragging?.day === day && (
                            <div
                                className="booking-block dragging"
                                style={{
                                position: 'absolute',
                                top: `${dragging.top}px`,
                                height: `${dragging.height}px`,
                                left: 0,
                                right: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                border: '1px dashed white',
                                pointerEvents: 'none',
                                }}
                            />
                        )}

                        {blocks
                        .filter((b) => b.day === day)
                        .map((b, i) => (
                            <div
                            key={i}
                            className="booking-block"
                            style={{
                                position: 'absolute',
                                top: `${b.top}px`,
                                height: `${b.height}px`,
                                left: 0,
                                right: 0,
                                backgroundColor: 'rgba(0, 153, 255, 0.4)',
                                color: 'white',
                                fontSize: '0.9rem',
                                padding: '0.2rem 0.4rem',
                            }}
                            >
                                {b.from} – {b.to}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
