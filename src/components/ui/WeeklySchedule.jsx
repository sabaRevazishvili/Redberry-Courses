import React, { useState } from "react";
import one from "../../assets/icons/one.svg";
import arrow from "../../assets/icons/arrow.svg";

const SCHEDULE_OPTIONS = [
  { id: 1, label: "Mon - Wed" },
  { id: 2, label: "Tue - Thu" },
  { id: 3, label: "Wed - Fri" },
  { id: 4, label: "Weekend" },
];

const WeeklySchedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full flex flex-col justify-center items-start gap-6.5">
      <div
        className="w-full flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="flex flex-row justify-center items-center gap-2">
          <img src={one} alt="1" />
          Weekly Schedule
        </h3>
        <img src={arrow} alt="Arrow" />
      </div>
      {isOpen && (
        <div className="flex justify-between items-center w-full">
          {SCHEDULE_OPTIONS.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`px-5 py-9 rounded-xl border text-base font-semibold transition-colors
              ${
                selected === option.id
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-purple-400"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeeklySchedule;
