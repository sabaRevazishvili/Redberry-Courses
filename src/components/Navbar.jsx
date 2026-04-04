import React from "react";
import logo from "../assets/icons/Logo.png";
import AuthNavEl from "./ui/AuthNavEl";
import { Link } from "react-router-dom";
import UnAuthNavEl from "./ui/UnAuthNavEl";

const Navbar = () => {
  return (
    <nav className="bg-navigation border-b border-b-border flex flex-row px-44 py-6 justify-between items-center">
      <Link to="/">
        <img className="w-15 aspect-square" src={logo} />
      </Link>
      <UnAuthNavEl />
    </nav>
  );
};

export default Navbar;
