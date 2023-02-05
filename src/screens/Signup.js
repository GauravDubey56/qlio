import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server } from "../constants";
import "../assets/styles/header.css";
import "../assets/styles/index.css";
import Notification from "../components/utils/Notification";
import { handleSignup } from "../api/auth";
import { closeSnackBar } from "../components/utils/showNotifications";
function Signup() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    // eslint-disable-next-line no-console
    const res = await handleSignup(data);
    setAlert(res.success ? "success" : "error");
    setMsg(res.message ? res.message : res.success ? "success" : "error");
    setTimeout(() => {
      navigate("../login");
    }, 6000);
  };
  const closeBar = () => {
    setAlert("");
    setMsg("");
    setOpen(false);
  };
  useEffect(() => {
    debugger;
    if (alert && msg && !open) {
      setOpen(true);
    }
  }, [alert, msg]);
  debugger;
  console.log(alert, msg);
  return (
    <section className="sec1">
      <h2>Register</h2>
      <form className="queueform" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="Enter Full Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="Enter Full Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="username">Email:</label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            required
          />
        </div>
        {/* <div className="formGroup">
          <label htmlFor="otp">OTP:</label>
          <button id="otpBtn" className="otpBtn" type="button" name="button">Send OTP</button>
          <input id="otp" type="number" name="otp" className="form-control" required />
        </div> */}
        {open && (
          <Notification
            message={msg}
            type={alert}
            handleClose={closeBar}
            open={open}
          />
        )}
        <button id="regBtn" type="submit" name="button" className="subBtn">
          Register
        </button>
      </form>

      <p>
        Already have an account, <a href="/login">Login</a>
      </p>
    </section>
  );
}

export default Signup;
