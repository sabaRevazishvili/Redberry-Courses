import React, { useState } from "react";
import two from "../../assets/icons/two.svg";
import arrow from "../../assets/icons/arrow.svg";
import Morning from "../../assets/icons/morning.svg";
import Afternoon from "../../assets/icons/afternoon.svg";
import Evening from "../../assets/icons/evening.svg";

const TIME_SLOTS = [
  { id: 1, label: "Morning", time: "9:00 AM - 12:00 PM", icon: Morning },
  { id: 2, label: "Afternoon", time: "12:00 AM - 6:00 PM", icon: Afternoon },
  { id: 3, label: "Evening", time: "6:00 AM - 9:00 PM", icon: Evening },
];

const TimeSlot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  console.log(selected);
  return (
    <div className="py-8 w-full flex flex-col justify-center items-start gap-6.5">
      <div
        className="w-full flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="flex flex-row justify-center items-center gap-2">
          <img src={two} alt="2" />
          Time Slot
        </h3>
        <img src={arrow} alt="Arrow" />
      </div>
      {isOpen && (
        <div className="flex justify-between items-center w-full">
          {TIME_SLOTS.map((option) => (
            <div
              key={option.id}
              className="flex flex-row justify-center items-center gap-0.5 border border-border rounded-xl px-4 py-3"
              onClick={() => setSelected(option.id)}
            >
              <img src={option.icon} alt={option.label} />
              <div>
                <h4 className="text-sm">{option.label}</h4>
                <p className="text-xs">{option.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeSlot;
