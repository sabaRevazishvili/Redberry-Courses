import React, { useEffect, useState } from "react";
import arrow from "../assets/icons/arrow-down.png";
import CourseCard from "./ui/CourseCard";

const courseURL =
  "https://api.redclass.redberryinternship.ge/api/courses?sort=newest&page=1  &perPage=9";

export const CoursesInfo = ({
  selectedCategories,
  selectedTopics,
  selectedInstructors,
}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const categoryParams = selectedCategories
      .map((id) => `categories[]=${id}`)
      .join("&");
    const topicParams = selectedTopics.map((id) => `topics[]=${id}`).join("&");
    const instructorParams = selectedInstructors
      .map((id) => `instructors[]=${id}`)
      .join("&");

    const extraParams = [categoryParams, topicParams, instructorParams]
      .filter(Boolean)
      .join("&");

    const url = extraParams ? `${courseURL}&${extraParams}` : courseURL;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data.data));
  }, [selectedCategories, selectedTopics, selectedInstructors]);

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
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
