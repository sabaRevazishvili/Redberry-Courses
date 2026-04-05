import React from "react";
import { CourseFilters } from "../components/CourseFilters";
import { CoursesInfo } from "../components/CoursesInfo";
import arrow from "../assets/icons/arrow-down.png";

const Courses = () => {
  return (
    <main className="px-44 bg-navigation flex flex-col ">
      <span className="flex flex-row mt-16 mb-8.5">
        Home <img className="-rotate-90 object-contain" src={arrow} /> Browse
      </span>
      <div className="flex flex-row gap-22.5">
        <CourseFilters />
        <CoursesInfo />
      </div>
    </main>
  );
};

export default Courses;
