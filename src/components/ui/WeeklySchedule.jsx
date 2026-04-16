import React, { useState, useEffect } from "react";

const WeeklySchedule = ({ courseId, setWeeklyScheduleId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.redclass.redberryinternship.ge/api/courses/${courseId}/weekly-schedules`,
          { headers: { accept: "application/json" } },
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = await response.json();
        setSchedules(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, [courseId]);
  return (
    <div className="w-132.5 font-sans select-none">
      <div
        className="flex items-center justify-between cursor-pointer h-7.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border border-[#1A1A60] flex items-center justify-center text-[#1A1A60] text-[12px] font-bold">
            1
          </div>
          <h2 className="text-[18px] font-semibold text-[#1A1A60]">
            Weekly Schedule
          </h2>
        </div>
        <svg
          className={`w-4 h-4 text-[#1A1A60] transition-transform ${isOpen ? "" : "-rotate-90"}`}
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
          {loading && (
            <p className="text-sm text-gray-400">Loading schedules...</p>
          )}
          {error && <p className="text-sm text-red-400">{error}</p>}
          {!loading &&
            !error &&
            schedules.map((schedule) => (
              <div
                onClick={() => {
                  setWeeklyScheduleId(schedule.id);
                }}
                key={schedule.id}
                className="w-31.75 h-25 border border-gray-200 rounded-lg flex items-center justify-center text-[14px] font-medium  text-gray-800"
              >
                {schedule.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default WeeklySchedule;
