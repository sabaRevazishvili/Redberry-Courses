import React from "react";
import { CourseFilters } from "../components/CourseFilters";
import { CoursesInfo } from "../components/CoursesInfo";

const Courses = () => {
  return (
    <main className="px-44 bg-navigation flex -flex-row">
      <CourseFilters />
      <CoursesInfo />
    </main>
  );
};

export default Courses;
