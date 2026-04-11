import React from "react";
import closeBttn from "../../assets/icons/x.png";

const LogInModal = ({ onClose = () => {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };
  return (
    <div className="relative w-115 bg-white flex flex-col justify-center items-center p-12.5 rounded-xl">
      <h2 className="font-semibold text-3xl">Welcome Back</h2>
      <p className="font-medium text-sm text-textgrey">
        Log in to continue your learning
      </p>
      <form
        className="w-full flex flex-col justify-center items-left gap-2 "
        onSubmit={handleSubmit}
      >
        <label className="font-medium text-sm">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="border border-border w-full p-3 rounded-lg mt-2 mb-4"
        />
        <label className="font-medium text-sm">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="border border-border w-full p-3 rounded-lg mt-2 mb-4"
        />
        <button
          type="submit"
          className="bg-primary w-full py-3 text-white rounded-lg font-medium"
        >
          Log In
        </button>
      </form>
      <button onClick={onClose} className="top-3 right-3 absolute">
        <img src={closeBttn} />
      </button>
      <div className="w-full relative flex py-5 items-center">
        <div className="w-full border-t border-border"></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] bg-white px-2 text-sm text-textgrey">
          or
        </span>
      </div>

      <p className="text-textgrey text-xs">
        Don't have an account?{" "}
        <a className="text-sm font-medium text-text underline" href="/login">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LogInModal;
