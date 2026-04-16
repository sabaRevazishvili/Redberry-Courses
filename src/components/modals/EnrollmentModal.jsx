import React from "react";
import confirmation from "../../assets/icons/confirmation.png";

const EnrollmentModal = ({ onClose }) => {
  return (
    /* Overlay to dim the background */
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      {/* Modal Container: Fixed width to match 1920x1080 design proportions */}
      <div className="w-119 bg-white rounded-3xl p-15 flex flex-col items-center shadow-2xl">
        {/* Success Icon from local png */}
        <div className="mb-10">
          <img
            src={confirmation}
            alt="Success"
            className="w-30 h-30 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-[34px] font-bold text-[#333333] mb-6">
          Enrollment Confirmed!
        </h2>

        {/* Description */}
        <p className="text-[22px] text-[#4F4F4F] text-center leading-8 mb-15 px-4">
          You've successfully enrolled to the <br />
          <span className="font-bold">
            “Advanced React & TypeScript Development”
          </span>{" "}
          Course!
        </p>

        {/* Done Button */}
        <button
          onClick={onClose}
          className="w-full h-18 bg-[#5346E0] hover:bg-[#4338ca] text-white text-[20px] font-semibold rounded-xl transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default EnrollmentModal;
