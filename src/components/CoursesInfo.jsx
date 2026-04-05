import React from "react";
import arrow from "../assets/icons/arrow-down.png";
import CourseCard from "./ui/CourseCard";

export const CoursesInfo = () => {
  return (
    <section className="w-4/5">
      <div className="w-full flex flex-row justify-between items-center mb-8">
        <p>Showing 9 out of 90</p>
        <button className="text-textgrey text-base font-medium flex flex-row justify-center items-center gap-2 px-5 py-3 bg-white rounded-lg">
          Sort By:<span className="text-primary">Newest First</span>
          <img src={arrow} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <CourseCard key={i} />
        ))}
      </div>
    </section>
  );
};
