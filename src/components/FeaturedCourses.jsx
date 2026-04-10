import React, { useEffect, useState } from "react";
import FeaturedCourseCard from "./ui/FeaturedCourseCard";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const URL = "https://api.redclass.redberryinternship.ge/api/courses/featured";
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCourses(data.data))
      .catch((err) => setError(err.message));
  }, []);
  console.log(courses);
  console.log(error);

  return (
    <section className="py-16">
      <h2 className="font-semibold text-4xl">Start Learning Today</h2>
      <p className="font-medium text-lg mb-8 mt-2">
        Choose from our most popular courses and begin your journey
      </p>
      <div className="w-full flex flex-row justify-between gap-6">
        {courses.map((course) => (
          <FeaturedCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
