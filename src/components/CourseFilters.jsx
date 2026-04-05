import React from "react";
import closeBttn from "../assets/icons/x.png";
import dev from "../assets/icons/dev.png";
import des from "../assets/icons/des.png";
import business from "../assets/icons/bus.png";
import data from "../assets/icons/data.png";
import mark from "../assets/icons/mark.png";
import marilyn from "../assets/images/instructor1.jpg";
import ryan from "../assets/images/instructor2.jpg";
import roger from "../assets/images/instructor3.jpg";
import zain from "../assets/images/instructor4.jpg";

export const CourseFilters = () => {
  const categorises = [
    { name: "Development", icon: dev },
    { name: "Design", icon: des },
    { name: "Business", icon: business },
    { name: "Data Science", icon: data },
    { name: "Marketing", icon: mark },
  ];

  const topics = [
    "React",
    "Typescript",
    "Phyton",
    "UX/UI",
    "Figma",
    "Javascript",
    "Node.js",
    "Machine learning",
    "Seo",
    "Analytics",
  ];

  const instructors = [
    { name: "Marilyn Mango", img: marilyn },
    { name: "Ryan Dorwat", img: ryan },
    { name: "Roger Calzoni", img: roger },
    { name: "Zain Philips", img: zain },
  ];

  return (
    <aside className="w-1/5 flex flex-col justify-start items-start gap-8">
      <div className="flex flex-row justify-start items-center gap-14">
        <h1 className="text-4xl font-semibold">Filter</h1>
        <button className="text-textgrey text-base font-medium flex flex-row justify-center items-center gap-2">
          Clear all filters
          <img src={closeBttn} alt="Close" />
        </button>
      </div>
      <div className="flex flex-col justify-start gap-14">
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-lg text-textgrey font-medium">Categories</h2>
          <ul className="flex flex-row flex-wrap items-center gap-2">
            {categorises.map((category) => (
              <li className="px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl bg-white  text-textgrey">
                <img src={category.icon} />
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-lg text-textgrey font-medium">Topics</h2>
          <ul className="flex flex-row flex-wrap items-center gap-2 pr-5">
            {topics.map((topic) => (
              <li className="px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl bg-white text-base text-textgrey">
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-lg text-textgrey font-medium">Instructor</h2>
          <ul className="flex flex-row flex-wrap items-center gap-2 pr-5">
            {instructors.map((instructor) => (
              <li className="px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl bg-white text-base text-textgrey">
                <img
                  src={instructor.img}
                  alt={instructor.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-base text-textgrey">
                  {instructor.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full text-sm text-textgrey font-medium pt-4 border-t border-t-border">
        0 Filters Active
      </div>
    </aside>
  );
};
