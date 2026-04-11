import React from "react";

const StepOne = ({ formData, onNext }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new window.FormData(e.target);
    formData.set("email", data.get("email")); // Update shared FormData
    onNext();
  };

  return (
    <form
      className="w-full flex flex-col justify-center items-left gap-2 "
      onSubmit={handleSubmit}
    >
      <label className="font-medium text-sm">Email*</label>
      <input
        name="email"
        type="email"
        placeholder="you@example.com"
        defaultValue={formData.get("email") || ""}
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

export default StepOne;
