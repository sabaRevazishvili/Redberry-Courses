import React from "react";
import logo from "../assets/icons/Logo.png";
import AuthNavEl from "./ui/AuthNavEl";

const Navbar = () => {
  return (
    <nav>
      <button>
        <img src={logo} />
      </button>
      <AuthNavEl />
    </nav>
  );
};

export default Navbar;
