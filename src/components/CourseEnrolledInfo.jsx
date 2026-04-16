import React, { useState } from "react";
import WeeklySchedule from "./ui/WeeklySchedule";
import TimeSlot from "./ui/TimeSlot";
import SessionType from "./ui/SessionType";
import PriceCard from "./ui/PriceCard";

const CourseEnrolledInfo = ({ details }) => {
  const [weeklyScheduleId, setWeeklyScheduleId] = useState(null);
  const [timeSlotId, setTimeSlotId] = useState(null);
  const [sessionPrice, setSessionPrice] = useState(null);
  const [courseScheduleId, setCourseScheduleId] = useState(null);

  return (
    <aside className="w-132.5 shrink-0 flex flex-col justify-start items-start gap-8">
      <WeeklySchedule
        courseId={details.id}
        setWeeklyScheduleId={setWeeklyScheduleId}
      />
      <TimeSlot
        courseId={details.id}
        weeklyScheduleId={weeklyScheduleId}
        setTimeSlotId={setTimeSlotId}
      />
      <SessionType
        courseId={details.id}
        weeklyScheduleId={weeklyScheduleId}
        timeSlotId={timeSlotId}
        setSessionPrice={setSessionPrice}
        setCourseScheduleId={setCourseScheduleId}
      />
      <PriceCard
        courseId={details.id}
        coursePrice={details.basePrice}
        courseScheduleId={courseScheduleId}
        sessionPrice={sessionPrice}
      />
    </aside>
  );
};

export default CourseEnrolledInfo;
