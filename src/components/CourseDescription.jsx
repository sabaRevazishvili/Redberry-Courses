import React from "react";
import date from "../assets/icons/date.png";
import clock from "../assets/icons/Clock.png";
import star from "../assets/icons/star.png";
import development from "../assets/icons/dev.png";
import design from "../assets/icons/des.png";
import business from "../assets/icons/bus.png";
import dataScience from "../assets/icons/data.png";
import marketing from "../assets/icons/mark.png";

const categoryIcons = {
  development,
  design,
  business,
  marketing,
  "data-science": dataScience,
};

const calcRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);

  return (total / reviews.length).toFixed(1);
};

const CourseDescription = ({ details }) => {
  return (
    <section className="flex-1 flex flex-col items-start justify-center">
      <img
        className="w-full h-118 object-cover rounded-lg"
        src={details.image}
        alt="Course"
      />
      <div className="w-full flex flex-row justify-between items-center my-6">
        <div className="flex flex-row justify-between items-center gap-4">
          <span className="flex flex-row items-center justify-center gap gap-1">
            <img src={date} />
            {details.durationWeeks} Weeks
          </span>
          <span className="flex flex-row items-center justify-center gap gap-1">
            <img src={clock} />
            {details.hours} Hours
          </span>
        </div>
        <div className="flex flex-row justify-between items-center gap-4">
          <span className="flex flex-row items-center justify-center gap gap-1">
            <img src={star} />
            {calcRating(details.reviews)}
          </span>
          <span className="px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl text-base cursor-pointer bg-white">
            <img src={categoryIcons[details.category.icon]} />
            {details.category.name}
          </span>
        </div>
      </div>
      <div className="px-3 py-2 flex flex-row justify-start items-center gap-2.5 rounded-xl text-base cursor-pointer bg-white">
        <img
          src={details.instructor.avatar}
          alt={details.instructor.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="group-hover:text-primary text-base text-textgrey">
          {details.instructor.name}
        </span>
      </div>
      <p className="pt-4.5 pb-6 font-semibold text-xl text-textgrey">
        Course Description
      </p>
      <p className="text-base font-medium ">{details.description}</p>
    </section>
  );
};

export default CourseDescription;
