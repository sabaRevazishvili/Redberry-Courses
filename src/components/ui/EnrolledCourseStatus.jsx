import React from "react";
import date from "../../assets/icons/date.png";
import clock from "../../assets/icons/Clock.png";
import online from "../../assets/icons/Desktop.png";
import location from "../../assets/icons/location.png";

const EnrolledCourseStatus = ({ enrollment }) => {
  const { progress, schedule } = enrollment;

  return (
    <div className="w-118.5 h-[451.87px] bg-white border border-gray-100 rounded-xl p-9 shadow-sm font-sans flex flex-col">
      <div className="mb-6">
        <span className="bg-[#F0F0FF] text-[#5346E0] text-[14px] font-bold px-3 py-1.5 rounded-4xl">
          Enrolled
        </span>
      </div>

      <div className="space-y-5 mb-10">
        <div className="flex items-center gap-3 text-[16px] text-[#1A1A1A]">
          <span className="text-gray-400 text-[18px]">
            <img src={date} />
          </span>
          <span className="font-medium">{schedule.weeklySchedule.label}</span>
        </div>
        <div className="flex items-center gap-3 text-[16px] text-[#1A1A1A]">
          <span className="text-gray-400 text-[18px]">
            {" "}
            <img src={clock} />
          </span>
          <span className="font-medium">{schedule.timeSlot.label}</span>
        </div>
        <div className="flex items-center gap-3 text-[16px] text-[#1A1A1A]">
          <span className="text-gray-400 text-[18px]">
            {" "}
            <img src={online} />
          </span>
          <span className="font-medium">{schedule.sessionType.name}</span>
        </div>
        <div className="flex items-center gap-3 text-[16px] text-[#1A1A1A]">
          <span className="text-gray-400 text-[18px]">
            {" "}
            <img src={location} />
          </span>
          <span className="font-medium">
            {!schedule.location ? "Online" : schedule.location}
          </span>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[14px] font-bold text-[#1A1A1A]">
            {progress}% Complete
          </span>
        </div>

        <div className="w-full h-3 bg-[#EEF0FF] rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-[#5346E0] rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button className="w-full h-15 bg-[#5346E0] hover:bg-[#4338ca] text-white rounded-xl text-[18px] font-bold flex items-center justify-center gap-2 transition-colors">
          Complete Course
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourseStatus;
