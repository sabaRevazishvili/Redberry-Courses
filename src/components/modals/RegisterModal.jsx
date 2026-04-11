import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import arrow from "../../assets/icons/arrow-down.png";
import closeBttn from "../../assets/icons/x.png";

const RegisterModal = ({ onClose = () => {} }) => {
  const [step, setStep] = useState(1);
  // Initialize a single FormData object to hold all values
  const [formData] = useState(new FormData());

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleFinalSubmit = () => {
    // Log FormData entries for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    // Perform your API call here (e.g., fetch('/api/register', { method: 'POST', body: formData }))
    // alert("Account Created Successfully!");
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne formData={formData} onNext={nextStep} />;
      case 2:
        return (
          <StepTwo formData={formData} onNext={nextStep} onBack={prevStep} />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            onSubmit={handleFinalSubmit}
            onBack={prevStep}
          />
        );
      default:
        return <StepOne formData={formData} onNext={nextStep} />;
    }
  };

  return (
    <div className="relative bg-white w-115 flex flex-col justify-center items-center p-12.5 rounded-xl">
      <h2 className="font-semibold text-3xl">Create Account</h2>
      <p className="font-medium text-sm text-textgrey pt-1.5 pb-6">
        Join and start learning today
      </p>
      <div className=" w-full flex flex-row gap-2 items-center ">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={`h-2 w-full rounded-full transition-colors duration-300 ${
              step > n
                ? "bg-primary" // completed
                : step === n
                  ? "bg-bar" // current
                  : "bg-clicked" // upcoming
            }`}
          />
        ))}
      </div>
      {step > 1 && (
        <button onClick={prevStep} className="top-3 left-3 absolute">
          <img className="rotate-90" src={arrow} />
        </button>
      )}
      <button onClick={onClose} className="top-3 right-3 absolute">
        <img src={closeBttn} />
      </button>
      <div className="w-full pt-6 pb-4">{renderStep()}</div>
      <div className="w-full relative flex py-5 items-center">
        <div className="w-full border-t border-border"></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] bg-white px-2 text-sm text-textgrey">
          or
        </span>
      </div>

      <p className="text-textgrey text-xs">
        Already have an account?
        <a className="text-sm font-medium text-text underline" href="/login">
          Log In
        </a>
      </p>
    </div>
  );
};

export default RegisterModal;
