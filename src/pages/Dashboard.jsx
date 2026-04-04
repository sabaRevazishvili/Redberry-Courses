import React from "react";
import HeroSection from "../components/HeroSection";
import CoursesInProgress from "../components/CoursesInProgress";
import FeaturedCourses from "../components/FeaturedCourses";

const Dashboard = () => {
  return (
    <main className="px-44 bg-navigation">
      <HeroSection />
      <CoursesInProgress />
      <FeaturedCourses />
    </main>
  );
};

export default Dashboard;
