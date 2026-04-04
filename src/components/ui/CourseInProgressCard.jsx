import React from "react";
import featureCoursesBg from "../../assets/images/featuredcoursesbg.png";
import star from "../../assets/icons/star.png";

const CourseInProgressCard = () => {
  return (
    <div className="w-1/3 p-5 bg-white rounded-xl">
      <div className="flex flex-row gap-4 items-start mb-2">
        <img
          className="object-cover w-35 h-31 rounded-xl"
          src={featureCoursesBg}
        />
        <div>
          <p className="text-sm flex flex-row justify-between items-center text-textgrey">
            <span>Lecturer Marilyn Mango</span>
            <span className="flex flex-row justify-center items-center">
              <img src={star} />
              4.9
            </span>
          </p>
          <h3 className="text-xl font-semibold mt-2">
            Advanced React & TypeScript Development
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700 mb-1">30% Complete</p>

          <div className="w-full bg-indigo-100 rounded-full h-3">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `30%` }}
            />
          </div>
        </div>

        <button className="border-2 border-primary rounded-lg text-primary py-3 px-6">
          View
        </button>
      </div>
    </div>
  );
};

export default CourseInProgressCard;
