import React from "react";
import avatar from "../../assets/icons/avatar.png";
import browse from "../../assets/icons/browse.png";
import enrolled from "../../assets/icons/enrolled.png";

const AuthNavEl = () => {
  return (
    <div>
      <button>
        <img src={browse} />
        Browse Courses
      </button>
      <button>
        <img src={enrolled} />
        Endrolled Courses
      </button>
      <img src={avatar} />
    </div>
  );
};

export default AuthNavEl;
