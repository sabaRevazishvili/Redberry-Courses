import React from "react";
import { useNavigate } from "react-router-dom";
import date from "../../assets/icons/date.png";
import clock from "../../assets/icons/Clock.png";
import user from "../../assets/icons/Users.png";
import locationIc from "../../assets/icons/location.png";

const EnrolledCourseCard = ({ details }) => {
  const { progress, course, schedule } = details;
  const navigate = useNavigate();

  return (
    <div className="w-155.5 h-74 bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div className="flex gap-5">
        <div className="w-50 h-40 rounded-lg overflow-hidden shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col grow">
          <div className="flex justify-between items-start mb-1">
            <span className="text-[12px] text-gray-400 font-medium">
              Instructor: {course.instructor.name}
            </span>
            <div className="flex items-center gap-1 text-[12px] font-bold text-gray-800">
              <span className="text-yellow-400">★</span> {course.avgRating}
            </div>
          </div>

          <h3 className="text-[20px] font-bold text-[#1A1A1A] leading-tight mb-3">
            {course.title}
          </h3>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <span className="w-4">
                <img src={date} alt="schedule" />
              </span>
              {schedule.weeklySchedule.label}
            </div>
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <span className="w-4">
                <img src={clock} alt="time" />
              </span>
              {schedule.timeSlot.label}
            </div>
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <span className="w-4">
                <img src={user} alt="session type" />
              </span>
              {schedule.sessionType.name}
            </div>
            <div className="flex items-center gap-2 text-[13px] text-gray-500">
              <span className="w-4">
                <img src={locationIc} alt="location" />
              </span>
              {!schedule.location ? "Online" : schedule.location}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between mt-4">
        <div className="grow mr-10">
          <span className="text-[12px] font-bold text-[#1A1A60] mb-2 block">
            {progress}% Complete
          </span>
          <div className="w-full h-2 bg-[#EEF0FF] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5346E0] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => navigate(`/CourseDetails/${course.id}`)}
          className="px-8 py-2.5 border border-[#5346E0] text-[#5346E0] rounded-lg text-[14px] font-bold hover:bg-[#F5F4FF] transition-colors whitespace-nowrap"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
