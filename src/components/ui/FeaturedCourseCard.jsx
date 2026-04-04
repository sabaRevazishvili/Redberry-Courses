import React from "react";
import coursesBg from "../../assets/images/coursesbg.jpg";
import star from "../../assets/icons/star.png";

const FeaturedCourseCard = () => {
  return (
    <div className="w-1/3 p-5 bg-white rounded-xl flex flex-col gap-4 ">
      <img className="rounded-xl" src={coursesBg} />
      <p className="text-sm flex flex-row justify-between items-center text-textgrey">
        <span>Lecturer Marilyn Mango</span>
        <span className="flex flex-row justify-center items-center">
          <img src={star} />
          4.9
        </span>
      </p>
      <h3 className="text-2xl font-semibold mt-2">
        Advanced React & TypeScript Development
      </h3>
      <p className="font-medium text-base text-textgrey">
        Master modern React patterns, hooks, and TypeScript integration for
        building scalable web applications.
      </p>
      <div className="flex flex-row justify-between mt-2 items-center">
        <p className="text-xs text-textgrey flex flex-row items-center gap-2">
          Starting From: <span className="text-3xl text-black">$299</span>
        </p>
        <button className="text-xl text-white font-medium py-3 px-6 bg-primary rounded-lg">
          Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourseCard;
