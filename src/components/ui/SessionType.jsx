import React, { useEffect, useState } from "react";
import hybrid from "../../assets/icons/hybrid.png";
import online from "../../assets/icons/Desktop.png";
import inPerson from "../../assets/icons/Users.png";

const SessionType = ({
  courseId,
  weeklyScheduleId,
  timeSlotId,
  setSessionPrice,
  setCourseScheduleId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionType, setSessionType] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const iconMap = {
    hybrid: hybrid,
    online: online,
    in_person: inPerson,
  };

  const titleMap = {
    in_person: "In-person",
    hybrid: " Hybrid",
    online: "Online",
  };

  useEffect(() => {
    if (!weeklyScheduleId || !timeSlotId) return;
    const fetchTimeSlots = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.redclass.redberryinternship.ge/api/courses/${courseId}/session-types?weekly_schedule_id=${weeklyScheduleId}&time_slot_id=${timeSlotId}`,
          { headers: { accept: "application/json" } },
        );
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = await response.json();
        setSessionType(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeSlots();
  }, [courseId, weeklyScheduleId, timeSlotId]);

  return (
    <div className="w-132.5 font-sans select-none">
      <div
        className="flex items-center justify-between cursor-pointer h-7.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 text-[12px] font-bold">
            3
          </div>
          <h2 className="text-[18px] font-semibold text-gray-400">
            Session Type
          </h2>
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
          {sessionType.map((session) => (
            <div
              key={session.name}
              onClick={() => {
                (setSessionPrice(session.priceModifier),
                  setCourseScheduleId(session.courseScheduleId));
              }}
              className="flex flex-col w-43"
            >
              <div className="h-35 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center p-2">
                <img src={iconMap[session.name]} alt={session.name} />
                <span className="text-[16px] font-bold text-text">
                  {titleMap[session.name]}
                </span>
                <span className="text-[14px] font-semibold text-primary mt-2">
                  {session.priceModifier == 0
                    ? "Included"
                    : `+ $${session.priceModifier}`}
                </span>
              </div>
              <span className="text-xs mt-2 text-center font-medium text-textgrey">
                {session.availableSeats} Seats Available
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SessionType;
