import React from "react";
import heroBg1 from "../../assets/images/hero_bg_1.png";

const HeroSlider = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat px-12 pt-12 pb-34 rounded-4xl"
      style={{ backgroundImage: `url(${heroBg1})` }}
    >
      <h1 className="font-bold text-white text-5xl">
        Start learning something new today
      </h1>
      <p className="font-light text-white text-2xl mt-3 mb-10">
        Explore a wide range of expert-led courses in design, development,
        business, and more. Find the skills you need to grow your career and
        learn at your own pace.
      </p>
      <button className="bg-primary text-white px-6.5 py-5 text-xl font-medium rounded-lg">
        Browse Courses
      </button>
    </div>
  );
};

export default HeroSlider;
