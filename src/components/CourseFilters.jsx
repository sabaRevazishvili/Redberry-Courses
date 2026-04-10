import React, { useEffect, useState } from "react";
import CloseBttn from "../assets/icons/x.svg?react";
import DevelopmentIcon from "../assets/icons/dev.svg?react";
import DesignIcon from "../assets/icons/des.svg?react";
import BusinessIcon from "../assets/icons/bus.svg?react";
import DataScienceIcon from "../assets/icons/data.svg?react";
import MarketingIcon from "../assets/icons/mark.svg?react";
const categoriesURL =
  "https://api.redclass.redberryinternship.ge/api/categories";

const topicsURL = "https://api.redclass.redberryinternship.ge/api/topics";
const instructorsURL =
  "https://api.redclass.redberryinternship.ge/api/instructors";

const categoryIcons = {
  development: DevelopmentIcon,
  design: DesignIcon,
  business: BusinessIcon,
  marketing: MarketingIcon,
  "data-science": DataScienceIcon,
};

export const CourseFilters = ({
  selectedCategories,
  selectedTopics,
  selectedInstructors,
  setSelectedCategories,
  setSelectedTopics,
  setSelectedInstructors,
}) => {
  const [categories, setCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(categoriesURL)
      .then((response) => response.json())
      .then((data) => setCategories(data.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    const params = selectedCategories
      .map((id) => `categories[]=${id}`)
      .join("&");

    const url = params ? `${topicsURL}?${params}` : topicsURL;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopics(data.data))
      .catch((err) => console.log(err.message));
  }, [selectedCategories]);

  useEffect(() => {
    fetch(instructorsURL)
      .then((response) => response.json())
      .then((data) => setInstructors(data.data))
      .catch((err) => console.log(err.message));
  }, []);

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };
  const toggleTopic = (id) => {
    setSelectedTopics((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id],
    );
  };
  const toggleInstructor = (id) => {
    setSelectedInstructors((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <aside className="w-1/5 flex flex-col justify-start items-start gap-8">
      <div className="flex flex-row justify-start items-center gap-14">
        <h1 className="text-4xl font-semibold">Filter</h1>
        <button
          onClick={() => {
            setSelectedCategories([]);
            setSelectedTopics([]);
            setSelectedInstructors([]);
          }}
          className="text-textgrey text-base font-medium flex flex-row justify-center items-center gap-2 cursor-pointer transition-colors hover:text-primary"
        >
          Clear all filters
          <CloseBttn />
        </button>
      </div>
      <div className="flex flex-col justify-start gap-14">
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-lg text-textgrey font-medium">Categories</h2>
          <ul className="flex flex-row flex-wrap items-center gap-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category.icon];

              return (
                <li
                  onClick={() => {
                    toggleCategory(category.id);
                  }}
                  key={category.id}
                  className={`px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl text-base cursor-pointer transition-all border
                  ${
                    selectedCategories.includes(category.id)
                      ? "bg-clicked text-primary border-primary" // Active state
                      : "bg-white text-textgrey border-transparent hover:bg-hovered hover:text-primary" // Default state
                  }`}
                >
                  {Icon && (
                    <Icon className="w-6 h-6 text-textgrey group-hover:text-primary transition-colors" />
                  )}
                  {category.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-lg text-textgrey font-medium">Topics</h2>
          <ul className="flex flex-row flex-wrap items-center gap-2 pr-5">
            {topics.map((topic) => (
              <li
                key={topic.id}
                onClick={() => {
                  toggleTopic(topic.id);
                }}
                className={`px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl text-base cursor-pointer transition-all border
                  ${
                    selectedTopics.includes(topic.id)
                      ? "bg-clicked text-primary border-primary" // Active state
                      : "bg-white text-textgrey border-transparent hover:bg-hovered hover:text-primary" // Default state
                  }`}
              >
                {topic.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <h2 className="text-lg text-textgrey font-medium">Instructor</h2>
          <ul className="flex flex-row flex-wrap items-center gap-2 pr-5">
            {instructors.map((instructor) => (
              <li
                key={instructor.id}
                onClick={() => {
                  toggleInstructor(instructor.id);
                }}
                className={`px-3 py-2 flex flex-row justify-center items-center gap-2.5 rounded-xl text-base cursor-pointer transition-all border
                  ${
                    selectedInstructors.includes(instructor.id)
                      ? "bg-clicked text-primary border-primary" // Active state
                      : "bg-white text-textgrey border-transparent hover:bg-hovered hover:text-primary" // Default state
                  }`}
              >
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="group-hover:text-primary text-base text-textgrey">
                  {instructor.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full text-sm text-textgrey font-medium pt-4 border-t border-t-border">
        {selectedCategories.length +
          selectedTopics.length +
          selectedInstructors.length}{" "}
        Filters Active
      </div>
    </aside>
  );
};
