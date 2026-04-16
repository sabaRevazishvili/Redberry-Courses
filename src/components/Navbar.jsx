import React, { useState } from "react";
import logo from "../assets/icons/Logo.png";
import AuthNavEl from "./ui/AuthNavEl";
import { Link } from "react-router-dom";
import UnAuthNavEl from "./ui/UnAuthNavEl";
import RegisterModal from "./modals/RegisterModal";
import LogInModal from "./modals/LogInModal";
import ProfileModal from "./modals/ProfileModal";
import { useAuthContext } from "../hooks/useAuthContext";
import EnrolledCourses from "./EnrolledCourses";

const Navbar = () => {
  const { token } = useAuthContext();

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  return (
    <nav className="bg-navigation border-b border-b-border flex flex-row px-44 py-6 justify-between items-center">
      <Link to="/">
        <img className="w-15 aspect-square" src={logo} />
      </Link>
      {token ? (
        <AuthNavEl
          onEnrollCoursesClick={() => setShowCourses(true)}
          onProfileClick={() => setShowProfile(true)}
        />
      ) : (
        <UnAuthNavEl
          onSignUp={() => setShowRegister(true)}
          onLogIn={() => setShowLogin(true)}
        />
      )}

      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <RegisterModal onClose={() => setShowRegister(false)} />
        </div>
      )}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <LogInModal onClose={() => setShowLogin(false)} />
        </div>
      )}
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <ProfileModal onClose={() => setShowProfile(false)} />
        </div>
      )}
      {showCourses && (
        <div
          onClick={() => setShowCourses(false)}
          className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/40 backdrop-blur-sm"
        >
          <EnrolledCourses />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
