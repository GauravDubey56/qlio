import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/styles/header.css";
import "../assets/styles/index.css";
import { handleLogin } from "../api/auth";
import Notification from "../components/utils/Notification";
function Login() {
  const [alert, setAlert] = useState("");
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    // eslint-disable-next-line no-console
    let res = await handleLogin(data);
    setAlert(res.success ? "success" : "error");
    setMsg(res.message ? res.message : res.success ? "success" : "error");
    setTimeout(() => {
      if (res.success) {
        navigate("../");
        window.location.reload(true);
      }
    }, 3000);
  };
  const closeBar = () => {
    setAlert("");
    setMsg("");
    setOpen(false);
  };
  useEffect(() => {
    // debugger;
    if (alert && msg && !open) {
      setOpen(true);
    }
  }, [alert, msg]);

  return (
    <section className="sec1">
      <h2>Login</h2>

      <form className="queueform" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="username">Email:</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>
        <button type="submit" name="button" className="subBtn">
          Login
        </button>
      </form>
      {open && (
        <Notification
          message={msg}
          type={alert}
          handleClose={closeBar}
          open={open}
        />
      )}
      <p>
        If you do not have an account already,{" "}
        <Link to="/signup">Register</Link>
      </p>
    </section>
  );
}

export default Login;
