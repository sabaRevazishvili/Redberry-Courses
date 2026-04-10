import React from "react";
import star from "../../assets/icons/star.png";
import development from "../../assets/icons/dev.png";
import design from "../../assets/icons/des.png";
import business from "../../assets/icons/bus.png";
import dataScience from "../../assets/icons/data.png";
import marketing from "../../assets/icons/mark.png";
import { useNavigate } from "react-router-dom";

const categoryIcons = {
  development,
  design,
  business,
  marketing,
  "data-science": dataScience,
};

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-start p-5 gap-4.5 bg-white rounded-lg">
      <img className="rounded-lg h-45 w-full object-cover" src={course.image} />
      <div className="flex flex-col gap-3">
        <p className="text-sm text-textgrey flex flex-row justify-between items-center">
          <span>
            {course.instructor.name} | {course.durationWeeks} Weeks
          </span>
          <span className="flex flex-row justify-center items-center">
            <img src={star} />
            {course.avgRating}
          </span>
        </p>
        <h3 className="text-2xl font-bold">{course.title}</h3>
      </div>
      <ul>
        <li className="px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl bg-navigation  text-textgrey font-medium">
          <img
            src={categoryIcons[course.category.icon]}
            alt={course.category.name}
          />
          {course.category.name}
        </li>
      </ul>
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-xs flex flex-col justify-center items-start gap-1 text-textgrey">
          Starting from:
          <span className="text-2xl font-semibold text-black">
            ${course.basePrice}
          </span>
        </p>
        <button
          onClick={() => navigate(`/CourseDetails/${course.id}`)}
          className="bg-primary text-white text-base font-medium px-6 py-3 rounded-lg"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
