import { useState, useEffect } from 'react';

export default function BookingCalendar({
  startHour = 12,
  endHour = 14,
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

  const SLOT_MINUTES = 30; // visual slot is 30 minutes
  const SLOT_PX = SLOT_MINUTES * SLOT_HEIGHT_PER_MINUTE;
  const totalMinutes = (endHour - startHour) * 60;
  const totalHeightPx = totalMinutes * SLOT_HEIGHT_PER_MINUTE;

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
    blockedSlots.some((slot) => slot.day === day && slot.time === time);

  const formatTime = (h, m) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

  const parseTimeToMinutes = (t) => {
    const [hh, mm] = t.split(':').map(Number);
    return hh * 60 + mm;
  };
  const minutesToPx = (mins) => (mins - startHour * 60) * SLOT_HEIGHT_PER_MINUTE;

  // Build merged "obstacle" ranges (in px) for a given day: user-created blocks + blockedSlots
  const getDayObstaclesPx = (day) => {
    const ranges = [];

    // Existing created blocks
    blocks
      .filter((b) => b.day === day)
      .forEach((b) => ranges.push({ start: b.top, end: b.top + b.height }));

    // Blocked slots (treat each as a 30-min obstacle)
    blockedSlots
      .filter((s) => s.day === day)
      .forEach((s) => {
        const startPx = minutesToPx(parseTimeToMinutes(s.time));
        if (startPx < 0 || startPx >= totalHeightPx) return;
        ranges.push({ start: startPx, end: Math.min(startPx + SLOT_PX, totalHeightPx) });
      });

    // Sort + merge overlapping/contiguous ranges
    ranges.sort((a, b) => a.start - b.start);
    const merged = [];
    for (const r of ranges) {
      if (!merged.length || r.start > merged[merged.length - 1].end) {
        merged.push({ ...r });
      } else {
        merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, r.end);
      }
    }
    return merged;
  };

  const pointInRanges = (ranges, y) => ranges.some((r) => y >= r.start && y < r.end);

  // Helper: is a given day in the current view today or before today?
  const isDayPastOrToday = (dayIndex) => {
    const today = new Date();
    const target = new Date();
    // Align to Monday-start week (add +1)
    target.setDate(today.getDate() - today.getDay() + dayIndex + weekOffset * 7 + 1);
    // Compare by date only
    const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    const d0 = new Date(target.getFullYear(), target.getMonth(), target.getDate()).getTime();
    return d0 <= t0;
  };

  const handleMouseDown = (e, day, isDisabledDay) => {
    if (isDisabledDay) return; // prevent starting a drag on past/today
    const rect = e.currentTarget.getBoundingClientRect();
    let y = e.clientY - rect.top;
    y = Math.max(0, Math.min(y, totalHeightPx));

    // Prevent starting inside any obstacle
    const obstacles = getDayObstaclesPx(day);
    if (pointInRanges(obstacles, y)) return;

    setDragging({ day, startY: y, containerTop: rect.top });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    // Current pointer within bounds
    let currentY = e.clientY - dragging.containerTop;
    currentY = Math.max(0, Math.min(currentY, totalHeightPx));

    const startY = dragging.startY;
    const draggingDown = currentY >= startY;

    const obstacles = getDayObstaclesPx(dragging.day);

    let minY = Math.min(startY, currentY);
    let maxY = Math.max(startY, currentY);

    if (draggingDown) {
      // Find the first obstacle starting at/after startY; clamp bottom to its start
      const next = obstacles.find((r) => r.start >= startY);
      const bottomLimit = next ? next.start : totalHeightPx;
      maxY = Math.min(maxY, bottomLimit);
    } else {
      // Find the last obstacle ending at/before startY; clamp top to its end
      const prev = [...obstacles].reverse().find((r) => r.end <= startY);
      const topLimit = prev ? prev.end : 0;
      minY = Math.max(minY, topLimit);
    }

    // Snap without exceeding limits: floor bottom to limit and floor top
    const snappedTop = Math.floor(minY / SNAP_PX) * SNAP_PX;
    const snappedBottomLimit = Math.floor(maxY / SNAP_PX) * SNAP_PX;
    const snappedHeight = Math.max(0, snappedBottomLimit - snappedTop);

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
        const day = block.day;

        // Obstacles: other blocks + blockedSlots
        const obstacles = getDayObstaclesPx(day).filter(
          (r) => !(r.start === block.top && r.end === block.top + block.height)
        );

        // Bottom limit is next obstacle's start or grid bottom
        const next = obstacles.find((r) => r.start >= block.top);
        const bottomLimit = next ? next.start : totalHeightPx;

        const desiredBottom = Math.min(block.top + Math.max(SNAP_PX, block.height + e.movementY), bottomLimit);
        const snappedBottom = Math.floor(desiredBottom / SNAP_PX) * SNAP_PX;
        const snappedHeight = Math.max(SNAP_PX, snappedBottom - block.top);

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

    const onMouseUp = () => setResizingIndex(null);

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
        <button onClick={() => setWeekOffset((w) => w - 1)} type="button">
          Previous Week
        </button>
        <button onClick={() => setWeekOffset((w) => w + 1)} type="button">
          Next Week
        </button>
      </div>

      <div className="booking-grid">
        <div className="time-column">
          {timeSlots.map((time) => (
            <div key={time} className="time-label">
              {time}
            </div>
          ))}
          <div className="time-label">{endHour}:00</div>
        </div>

        {days.map((day, dayIndex) => {
          const isPastOrToday = isDayPastOrToday(dayIndex);

          return (
            <div
              key={day}
              className="day-container"
              style={{ position: 'relative' }}
              onMouseDown={(e) => handleMouseDown(e, day, isPastOrToday)}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className={`slot-container ${isPastOrToday ? 'unavailable' : ''}`}
                >
                  <div className="booking-area">{isBlocked(day, time) ? '⛔' : ''}</div>
                </div>
              ))}

              {dragging?.day === day &&
                dragging.height >= SNAP_PX &&
                typeof dragging.top === 'number' && (
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
                      const toHour =
                        startHour + Math.floor((minutesFromStart + durationMinutes) / 60);
                      const toMin = (minutesFromStart + durationMinutes) % 60;
                      return `${formatTime(fromHour, fromMin)} - ${formatTime(
                        toHour,
                        toMin
                      )}`;
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
                    {b.from} - {b.to}
                    <div className="resize-handle" onMouseDown={(e) => startResizingBlock(e, i)} />
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
