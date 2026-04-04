import React from "react";
import logo from "../assets/icons/Logo.png";
import facebook from "../assets/icons/Facebook.png";
import twitter from "../assets/icons/Twitter.png";
import instagram from "../assets/icons/Instagram.png";
import linkdin from "../assets/icons/LinkedIn.png";
import youtube from "../assets/icons/YouTube.png";
import location from "../assets/icons/location.png";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/mail.png";

const Footer = () => {
  return (
    <footer className="bg-navigation flex flex-row items-center justify-between px-44 pb-5 pt-20 border-t border-t-border">
      <div className="flex flex-col items-start gap-18">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-row justify-center items-center gap-4">
            <img className="w-11 aspect-square" src={logo} />
            <h3 className="text-2xl text-primary font-medium">Bootcamp</h3>
          </div>
          <p className="text-sm max-w-77.5 font-medium">
            Your learning journey starts here! Browse courses to get started.
          </p>
          <div className="flex flex-row gap-4">
            <img className="object-contain aspect-square" src={facebook} />
            <img className="object-contain aspect-square" src={twitter} />
            <img className="object-contain aspect-square" src={instagram} />
            <img className="object-contain aspect-square" src={linkdin} />
            <img className="object-contain aspect-square" src={youtube} />
          </div>
        </div>
        <span className="text-lg text-textgrey">
          Copyright © 2026 Redberry International
        </span>
      </div>
      <div className="flex flex-col items-end gap-18">
        <div className="flex flex-row gap-30 ">
          <div>
            <h4 className="text-lg text-text font-semibold">Explore</h4>
            <ul>
              <li className="text-lg text-textgrey">Enrolled Courses</li>
              <li className="text-lg text-textgrey">Browse Courses</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-text font-semibold">Account</h4>
            <a className="text-lg text-textgrey">My Profile</a>
          </div>
          <div>
            <h4 className="text-lg text-text font-semibold">Contact</h4>
            <ul>
              <li className="text-lg text-textgrey flex items-center gap-2">
                <img src={email} alt="Email" className="w-5 h-5" />
                contact@company.com
              </li>
              <li className="text-lg text-textgrey flex items-center gap-2">
                <img src={phone} alt="Phone" className="w-5 h-5" />
                (+995) 555 111 222
              </li>
              <li className="text-lg text-textgrey flex items-center gap-2">
                <img src={location} alt="Location" className="w-5 h-5" />
                Aghmashenebeli St.115
              </li>
            </ul>
          </div>
        </div>
        <span className="text-lg text-textgrey">
          All Rights Reserved |{" "}
          <a className=" text-primary">Terms and Conditions </a> |{" "}
          <a className=" text-primary">Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
