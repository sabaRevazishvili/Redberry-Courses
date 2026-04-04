import React from "react";
import FeaturedCourseCard from "./ui/FeaturedCourseCard";

const FeaturedCourses = () => {
  return (
    <section className="py-16">
      <h2 className="font-semibold text-4xl">Start Learning Today</h2>
      <p className="font-medium text-lg mb-8 mt-2">
        Choose from our most popular courses and begin your journey
      </p>
      <div className="w-full flex flex-row justify-between gap-6">
        <FeaturedCourseCard />
        <FeaturedCourseCard />
        <FeaturedCourseCard />
      </div>
    </section>
  );
};

export default FeaturedCourses;
