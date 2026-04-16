import React, { useEffect, useState } from "react";

const TimeSlot = ({ courseId, weeklyScheduleId, setTimeSlotId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    if (!weeklyScheduleId) return;
    const fetchTimeSlots = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.redclass.redberryinternship.ge/api/courses/${courseId}/time-slots?weekly_schedule_id=${weeklyScheduleId}`,
          { headers: { accept: "application/json" } },
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = await response.json();
        setTimeSlots(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeSlots();
  }, [courseId, weeklyScheduleId]);

  return (
    <div className="w-132.5 font-sans select-none">
      <div
        className="flex items-center justify-between cursor-pointer h-7.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 text-[12px] font-bold">
            2
          </div>
          <h2 className="text-[18px] font-semibold text-gray-400">Time Slot</h2>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "" : "-rotate-90"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="flex gap-1.75 mt-4">
          {timeSlots.map((slot) => (
            <div
              onClick={() => {
                setTimeSlotId(slot.id);
              }}
              key={slot.label}
              className="w-43 h-20 border border-gray-200 rounded-lg p-3 flex flex-col justify-center"
            >
              <span className="text-[14px] font-bold text-gray-700">
                {slot.label}
              </span>
              <span className="text-[11px] text-gray-400">{slot.time}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeSlot;
