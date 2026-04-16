import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import arrow from "../../assets/icons/arrow-down.png";
import closeBttn from "../../assets/icons/x.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { LOGIN } from "../../context/actions";

const RegisterModal = ({ onClose = () => {} }) => {
  const [step, setStep] = useState(1);
  const [formData] = useState(new FormData());
  const { dispatch } = useAuthContext();
  const [, setErrors] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const URL = "https://api.redclass.redberryinternship.ge/api/register";

  const handleFinalSubmit = () => {
    setErrors({});
    fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            console.log("Validation Failed:", err.errors);
            setErrors(err.errors || { general: err.message });
            throw new Error("Validation failed");
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success!", data);

        localStorage.setItem("token", data.data.token);
        dispatch({
          type: LOGIN,
          payload: {
            user: data.data.user,
            token: data.data.token,
          },
        });
        onClose();
      })
      .catch((err) => {
        console.error("Submission error:", err.message);
        // If it's not a validation error (e.g., network failure), set a general error
        if (err.message !== "Validation failed") {
          setErrors({ general: "Network error. Please try again." });
        }
      });
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
