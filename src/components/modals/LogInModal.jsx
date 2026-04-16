import React, { useState } from "react";
import closeBttn from "../../assets/icons/x.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { LOGIN } from "../../context/actions";

const LogInModal = ({ onClose = () => {} }) => {
  const { dispatch } = useAuthContext();
  const [, setErrors] = useState({});

  const URL = "https://api.redclass.redberryinternship.ge/api/login";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            console.log("Validation Failed:", err.errors);
            setErrors(err.errors || { general: err.message });
            throw new Error("Validation failed");
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success!", data);

        localStorage.setItem("token", data.data.token);
        dispatch({
          type: LOGIN,
          payload: {
            user: data.data.user,
            token: data.data.token,
          },
        });
        onClose();
      })
      .catch((err) => {
        console.error("Submission error:", err.message);
        // If it's not a validation error (e.g., network failure), set a general error
        if (err.message !== "Validation failed") {
          setErrors({ general: "Network error. Please try again." });
        }
      });
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
