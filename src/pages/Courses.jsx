import React, { useState } from "react";
import { CourseFilters } from "../components/CourseFilters";
import { CoursesInfo } from "../components/CoursesInfo";
import arrow from "../assets/icons/arrow-down.png";

const Courses = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  return (
    <main className="px-44 bg-navigation flex flex-col ">
      <span className="flex flex-row mt-16 mb-8.5">
        Home <img className="-rotate-90 object-contain" src={arrow} /> Browse
      </span>
      <div className="flex flex-row gap-22.5">
        <CourseFilters
          selectedCategories={selectedCategories}
          selectedTopics={selectedTopics}
          selectedInstructors={selectedInstructors}
          setSelectedCategories={setSelectedCategories}
          setSelectedTopics={setSelectedTopics}
          setSelectedInstructors={setSelectedInstructors}
        />
        <CoursesInfo
          selectedCategories={selectedCategories}
          selectedTopics={selectedTopics}
          selectedInstructors={selectedInstructors}
        />
      </div>
    </main>
  );
};

export default Courses;
