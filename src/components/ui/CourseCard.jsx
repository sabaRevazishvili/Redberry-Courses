import React from "react";
import courseImg from "../../assets/images/coursesbg.jpg";
import star from "../../assets/icons/star.png";
import dev from "../../assets/icons/dev.png";

const CourseCard = () => {
  return (
    <div className="flex flex-col justify-center items-start p-5 gap-4.5 bg-white rounded-lg">
      <img className="rounded-lg" src={courseImg} />
      <div className="flex flex-col gap-3">
        <p className="text-sm text-textgrey flex flex-row justify-between items-center">
          <span>Marilyn Mango | 12 Weeks</span>
          <span className="flex flex-row justify-center items-center">
            <img src={star} />
            4.9
          </span>
        </p>
        <h3 className="text-2xl font-bold">
          Advanced React & TypeScript Development
        </h3>
      </div>
      <ul>
        <li className="px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl bg-navigation  text-textgrey font-medium">
          <img src={dev} />
          Developer
        </li>
      </ul>
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-xs flex flex-col justify-center items-start gap-1 text-textgrey">
          Starting from:
          <span className="text-2xl font-semibold text-black">$299</span>
        </p>
        <button className="bg-primary text-white text-base font-medium px-6 py-3 rounded-lg">
          Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
