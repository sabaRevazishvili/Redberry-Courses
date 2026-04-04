import React from "react";
import CoursesInProgressCard from "./ui/CourseInProgressCard";

const CoursesInProgress = () => {
  return (
    <section className="py-16">
      <h2 className="font-semibold text-4xl">Continue Learning</h2>
      <p className="font-medium text-lg mb-8 mt-2">Pick up where you left</p>
      <div className="w-full flex flex-row justify-between gap-6">
        <CoursesInProgressCard />
        <CoursesInProgressCard />
        <CoursesInProgressCard />
      </div>
    </section>
  );
};

export default CoursesInProgress;
