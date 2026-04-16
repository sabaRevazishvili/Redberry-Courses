import React, { useState, useEffect } from "react";
import EnrolledCourseCard from "./ui/EnrolledCourseCard";

const EnrolledCoursesSidebar = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://api.redclass.redberryinternship.ge/api/enrollments",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const json = await response.json();
        setEnrolledCourses(json.data);
      } catch (err) {
        console.error("Error:", err.message);
      }
    };

    fetchEnrolledCourses();
  }, []);

  return (
    <div className="bg-white p-18">
      <div className="flex justify-between items-end mb-6 px-2">
        <h2 className="text-[28px] font-bold text-[#1A1A1A]">
          Enrolled Courses
        </h2>
        <span className="text-[14px] text-gray-500 font-medium mb-1">
          Total Enrolled: {enrolledCourses.length}
        </span>
      </div>

      <div className="flex flex-col gap-4.5 h-full overflow-y-auto pr-2 no-scrollbar">
        {enrolledCourses.map((course) => (
          <EnrolledCourseCard key={course.id} details={course} />
        ))}
      </div>
    </div>
  );
};

export default EnrolledCoursesSidebar;
