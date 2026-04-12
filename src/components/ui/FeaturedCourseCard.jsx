import React from "react";
import star from "../../assets/icons/star.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FeaturedCourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="w-1/3 p-5 bg-white rounded-xl flex flex-col gap-4 ">
      <img className="rounded-xl h-65 object-cover" src={course.image} />
      <p className="text-sm flex flex-row justify-between items-center text-textgrey">
        <span>Lecturer {course.instructor.name}</span>
        <span className="flex flex-row justify-center items-center">
          <img src={star} />
          {course.avgRating}
        </span>
      </p>
      <h3 className="text-2xl font-semibold mt-2">{course.title}</h3>
      <p className="font-medium text-base text-textgrey">
        {course.description}
      </p>
      <div className="flex flex-row justify-between mt-2 items-center">
        <p className="text-xs text-textgrey flex flex-row items-center gap-2">
          Starting From:{" "}
          <span className="text-3xl text-black">${course.basePrice}</span>
        </p>
        <button
          onClick={() => navigate(`/CourseDetails/${course.id}`)}
          className="text-xl text-white font-medium py-3 px-6 bg-primary rounded-lg"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourseCard;
