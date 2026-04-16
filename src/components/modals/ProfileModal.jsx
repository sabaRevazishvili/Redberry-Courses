import React, { useState } from "react";
import closeBttn from "../../assets/icons/x.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import profile from "../../assets/icons/profile.png";
import upload from "../../assets/icons/upload.png";
import pencil from "../../assets/icons/pencil.png";
import check from "../../assets/icons/check.png";
import { LOGIN } from "../../context/actions";

const ProfileModal = ({ onClose = () => {} }) => {
  const { user, token, dispatch } = useAuthContext();
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    age: user?.age || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("full_name", formData.fullName);
    formDataToSend.append("mobile_number", formData.mobileNumber);
    formDataToSend.append("age", formData.age);
    // if you add avatar file state later: formDataToSend.append("avatar", avatarFile);

    const res = await fetch(
      "https://api.redclass.redberryinternship.ge/api/profile",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      },
    );

    const data = await res.json();
    if (res.ok) {
      dispatch({
        type: LOGIN,
        payload: { user: data.data, token: token },
      });
    }
  };
  return (
    <div className="w-117.5 mx-auto bg-white rounded-2xl shadow-lg p-10 relative font-sans">
      <button
        onClick={() => onClose()}
        className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
      >
        <img src={closeBttn} className="w-3.5 h-3.5" alt="close" />
      </button>

      <h2 className="text-2xl font-bold text-center mb-8 text-[#111827]">
        Profile
      </h2>

      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <img
            src={profile}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#22C55E] border-2 border-white rounded-full"></div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-[#111827]">
            {user?.username || "Username"}
          </h3>
          <p className="text-[#22C55E] text-sm font-medium">
            Profile is Complete
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#111827]">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full h-13 px-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none text-[#9CA3AF] text-base"
            />
            <img
              src={pencil}
              className="absolute right-4 top-4.5 w-4 h-4 opacity-40"
              alt="edit"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#111827]">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-13 px-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none text-[#9CA3AF] text-base"
            />
            <img
              src={check}
              className="absolute right-4 top-4.5 w-4.5 h-4.5 opacity-40"
              alt="checked"
            />
          </div>
        </div>

        <div className="flex gap-4">
          {/* Mobile Number Container */}
          <div className="w-70 flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111827]">
              Mobile Number
            </label>
            <div className="relative">
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full h-13 px-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none text-[#9CA3AF] text-base"
              />
              <img
                src={check}
                className="absolute right-4 top-4.5 w-4.5 h-4.5 opacity-40"
                alt="checked"
              />
            </div>
          </div>

          {/* Age Container - REPLACED DUPLICATE MOBILE CODE */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#111827]">Age</label>
            <div className="relative">
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full h-13 px-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl focus:outline-none text-[#9CA3AF] text-base"
              />
            </div>
          </div>
        </div>

        {/* Upload Avatar Area */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#111827]">
            Upload Avatar
          </label>
          <div className="w-full h-40 border-2 border-dashed border-[#E5E7EB] rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="mb-3">
              <img src={upload} className="w-8 h-8 opacity-40" alt="upload" />
            </div>
            <p className="text-sm text-[#6B7280]">
              Drag and drop or{" "}
              <span className="text-[#4F46E5] font-semibold cursor-pointer underline">
                Upload file
              </span>
            </p>
            <p className="text-xs text-[#9CA3AF] mt-1 font-medium">
              JPG, PNG or WebP
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-base rounded-xl transition duration-200 mt-3"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileModal;
