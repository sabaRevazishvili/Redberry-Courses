import React from "react";
import WeeklySchedule from "./ui/WeeklySchedule";
import TimeSlot from "./ui/TimeSlot";
import SessionType from "./ui/SessionType";

const CourseEnrolledInfo = () => {
  return (
    <aside className="w-132.5 shrink-0">
      <WeeklySchedule />
      <TimeSlot />
      <SessionType />
    </aside>
  );
};

export default CourseEnrolledInfo;
