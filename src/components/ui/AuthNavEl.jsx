import React from "react";
import avatar from "../../assets/icons/Avatar.png";
import browse from "../../assets/icons/browse.png";
import enrolled from "../../assets/icons/enrolled.png";
import { Link } from "react-router-dom";

const AuthNavEl = () => {
  return (
    <ul className="flex flex-row justify-center items-center gap-7.5">
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
        <Link
          to="/enrolled"
          className="text-xl flex flex-row items-center justify-center gap-2"
        >
          <img src={enrolled} />
          Enrolled Courses
        </Link>
      </li>
      <li>
        <img className="w-15 aspect-square" src={avatar} />
      </li>
    </ul>
  );
};

export default AuthNavEl;
