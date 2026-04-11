import React from "react";
import upload from "../../assets/icons/upload.png";

const StepThree = ({ formData, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new window.FormData(e.target);

    formData.set("username", data.get("username"));
    formData.set("avatar", data.get("avatar")); // File object from input

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="font-medium text-sm">Username*</label>
      <input
        name="username"
        type="text"
        placeholder="Username"
        defaultValue={formData.get("username") || ""}
        required
        className="border border-border w-full p-3 rounded-lg mt-2 mb-4"
      />

      <label className="font-medium text-sm">Upload Avatar</label>
      <div className="flex items-center justify-center w-full mt-3 mb-4">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full py-7.5 border border-border rounded-lg cursor-pointer "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <img src={upload} />
            <p className="mb-2 text-sm text-gray-700 font-medium">
              Drag and drop or{" "}
              <span className="text-primary underline">Upload file</span>
            </p>
            <p className="text-xs text-textgrey">JPG, PNG or WebP</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <button
        type="submit"
        className="bg-primary w-full py-3 text-white rounded-lg font-medium"
      >
        Sign Up
      </button>
    </form>
  );
};

export default StepThree;
