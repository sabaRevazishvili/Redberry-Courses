import React from "react";
import closeBttn from "../../assets/icons/x.png";

const ProfileModal = ({ onClose = () => {} }) => {
  return (
    <div className="h-182.5 w-115 bg-white relative">
      <div>
        <img />
        <div>
          <h2>Username</h2>
          <p>Profile is Complite</p>
        </div>
      </div>
      <form>
        <label>Full Name</label>
        <input />
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Mobile Number</label>
        <input />
        <label htmlFor="">Age</label>
        <input type="text" />
      </form>

      <button onClick={onClose} className="top-3 right-3 absolute">
        <img src={closeBttn} />
      </button>
    </div>
  );
};

export default ProfileModal;
