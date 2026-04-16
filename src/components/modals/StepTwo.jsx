import React from "react";

const StepTwo = ({ formData, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new window.FormData(e.target);
    formData.set("password", data.get("password"));
    formData.set("password_confirmation", data.get("password_confirmation"));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="font-medium text-sm">Password*</label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="border border-border w-full p-3 rounded-lg mt-2 mb-4"
      />

      <label className="font-medium text-sm">Confirm Password*</label>
      <input
        name="password_confirmation"
        type="password"
        placeholder="********"
        required
        className="border border-border w-full p-3 rounded-lg mt-2 mb-4"
      />

      <button
        type="submit"
        className="bg-primary w-full py-3 text-white rounded-lg font-medium"
      >
        Next
      </button>
    </form>
  );
};

export default StepTwo;
