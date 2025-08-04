import { useState, useEffect } from 'react';

export default function BookingCalendar({
  startHour = 10,
  endHour = 18,
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  blockedSlots = [], // [{ day: 'Monday', time: '10:00' }]
}) {
    const [weekOffset, setWeekOffset] = useState(0);
    const [dragging, setDragging] = useState(null);
    const [blocks, setBlocks] = useState([]);
    const [resizingIndex, setResizingIndex] = useState(null);

    const SLOT_HEIGHT_PER_MINUTE = 80 / 60;
    const SNAP_MINUTES = 5;
    const SNAP_PX = SNAP_MINUTES * SLOT_HEIGHT_PER_MINUTE;

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

    const formatTime = (h, m) =>
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

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

        const snappedTop = Math.floor(minY / SNAP_PX) * SNAP_PX;
        const snappedHeight = Math.ceil((maxY - minY) / SNAP_PX) * SNAP_PX;

        setDragging((prev) => ({
            ...prev,
            currentY,
            top: snappedTop,
            height: snappedHeight,
        }));
    };

    const handleMouseUp = () => {
        if (
            !dragging ||
            typeof dragging.top !== 'number' ||
            typeof dragging.height !== 'number' ||
            dragging.height < SNAP_PX
        ) {
            setDragging(null);
            return;
        }

        const minutesFromStart = dragging.top / SLOT_HEIGHT_PER_MINUTE;
        const durationMinutes = dragging.height / SLOT_HEIGHT_PER_MINUTE;

        const fromHour = startHour + Math.floor(minutesFromStart / 60);
        const fromMin = minutesFromStart % 60;
        const toHour = startHour + Math.floor((minutesFromStart + durationMinutes) / 60);
        const toMin = (minutesFromStart + durationMinutes) % 60;

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

    const startResizingBlock = (e, index) => {
        e.stopPropagation();
        e.preventDefault();
        setResizingIndex(index);
    };

    useEffect(() => {
        if (resizingIndex === null) return;

        const onMouseMove = (e) => {
            setBlocks((prev) => {
                const block = prev[resizingIndex];
                const newHeight = Math.max(SNAP_PX, block.height + e.movementY);
                const snappedHeight = Math.round(newHeight / SNAP_PX) * SNAP_PX;

                const minutesFromStart = block.top / SLOT_HEIGHT_PER_MINUTE;
                const durationMinutes = snappedHeight / SLOT_HEIGHT_PER_MINUTE;
                const toHour = startHour + Math.floor((minutesFromStart + durationMinutes) / 60);
                const toMin = (minutesFromStart + durationMinutes) % 60;

                const updated = [...prev];
                updated[resizingIndex] = {
                    ...block,
                    height: snappedHeight,
                    to: formatTime(toHour, toMin),
                };
                return updated;
            });
        };

        const onMouseUp = () => {
            setResizingIndex(null);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, [resizingIndex]);

    return (
        <div id="booking-calendar">
            <div className="controls">
                <button onClick={() => setWeekOffset(w => w - 1)} type="button">Previous Week</button>
                <button onClick={() => setWeekOffset(w => w + 1)} type="button">Next Week</button>
            </div>

            <div className="booking-grid">
                <div className="time-column">
                    {timeSlots.map((time) => (
                        <div key={time} className="time-label">{time}</div>
                    ))}
                    <div className="time-label">{endHour}:00</div>
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

                    {timeSlots.map((time) => (
                    <div key={time} className="slot-container">
                        <div className="booking-area">
                        {isBlocked(day, time) ? '⛔' : ''}
                        </div>
                    </div>
                    ))}

                    {dragging?.day === day && dragging.height >= SNAP_PX && typeof dragging.top === 'number' && (
                        <div
                            className="booking-block dragging"
                            style={{
                                top: `${dragging.top}px`,
                                height: `${dragging.height}px`,
                            }}
                        >
                            {(() => {
                                const minutesFromStart = dragging.top / SLOT_HEIGHT_PER_MINUTE;
                                const durationMinutes = dragging.height / SLOT_HEIGHT_PER_MINUTE;
                                const fromHour = startHour + Math.floor(minutesFromStart / 60);
                                const fromMin = minutesFromStart % 60;
                                const toHour = startHour + Math.floor((minutesFromStart + durationMinutes) / 60);
                                const toMin = (minutesFromStart + durationMinutes) % 60;
                                return `${formatTime(fromHour, fromMin)} – ${formatTime(toHour, toMin)}`;
                            })()}
                        </div>
                    )}


                    {blocks
                    .filter((b) => b.day === day)
                    .map((b, i) => (
                        <div
                        key={i}
                        className="booking-block"
                        style={{
                            top: `${b.top}px`,
                            height: `${b.height}px`,
                        }}
                        >
                        {b.from} – {b.to}
                        <div
                            className="resize-handle"
                            onMouseDown={(e) => startResizingBlock(e, i)}
                        />
                        </div>
                    ))}
                </div>
                ))}
            </div>
        </div>
    );
}
