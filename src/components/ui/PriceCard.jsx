import React, { useState } from "react";
import EnrollmentModal from "../modals/EnrollmentModal";
const PriceCard = ({
  coursePrice,
  sessionPrice,
  courseScheduleId,
  courseId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calcTotal = () => {
    return (Number(coursePrice) + Number(sessionPrice)).toFixed(2);
  };

  const handleEnroll = async () => {
    try {
      const token = localStorage.getItem("token"); // or wherever you store it
      const response = await fetch(
        "https://api.redclass.redberryinternship.ge/api/enrollments",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            courseId: courseId,
            courseScheduleId: courseScheduleId,
            force: false,
          }),
        },
      );

      const json = await response.json();

      if (response.status === 409) {
        console.log("Conflict:", json.conflicts);
        return;
      }

      if (!response.ok) {
        console.error("Enrollment failed:", json.message);
        return;
      }

      console.log("Enrolled successfully!", json.data);
      const existing = JSON.parse(
        localStorage.getItem("enrollmentIds") || "[]",
      );
      existing.push(json.data.id);
      localStorage.setItem("enrollmentIds", JSON.stringify(existing));
    } catch (err) {
      console.error("Error:", err.message);
    }
  };
  return (
    <>
      <div className="w-132.5 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm font-sans">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-[24px] font-bold text-gray-500">Total Price</h3>
          <span className="text-[48px] font-bold text-[#2D2D2D] leading-none">
            ${calcTotal()}
          </span>
        </div>

        <div className="space-y-4 mb-10">
          <div className="flex justify-between items-center">
            <span className="text-[18px] text-gray-400 font-medium">
              Base Price
            </span>
            <span className="text-[18px] text-[#2D2D2D] font-bold">
              + ${coursePrice}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[18px] text-gray-400 font-medium">
              Session Type
            </span>
            <span className="text-[18px] text-[#2D2D2D] font-bold">
              + ${sessionPrice}
            </span>
          </div>
        </div>

        <button
          onClick={() => handleEnroll()}
          className="w-full h-20 bg-[#EEF0FF] text-[#B1B7FF] rounded-xl text-[22px] font-bold transition-colors hover:bg-[#E0E4FF]"
          type="button"
        >
          Enroll Now
        </button>
      </div>
      {isModalOpen && <EnrollmentModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default PriceCard;
