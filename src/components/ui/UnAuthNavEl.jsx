import React from "react";
import browse from "../../assets/icons/browse.png";
import { Link } from "react-router-dom";

const UnAuthNavEl = ({ onSignUp, onLogIn }) => {
  return (
    <ul className="flex flex-row justify-center items-center gap-5">
      <li>
        <Link
          to="/courses"
          className="text-xl flex flex-row items-center justify-center gap-2"
        >
          <img src={browse} />
          Browse Courses
        </Link>
      </li>
      <li>
        <button
          onClick={onLogIn}
          className="border-2 border-primary text-primary rounded-lg text-xl px-4 py-2 "
        >
          Log In
        </button>
      </li>
      <li>
        <button
          onClick={onSignUp}
          className="border-2 border-primary bg-primary rounded-lg text-xl px-4 py-2 text-white"
        >
          Sign Up
        </button>
      </li>
    </ul>
  );
};

export default UnAuthNavEl;
