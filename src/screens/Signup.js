import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { server } from '../constants';
import '../assets/styles/header.css'
import '../assets/styles/index.css'
function Signup() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    // eslint-disable-next-line no-console
    const payload = {
      email: data.get('username'),
      name: data.get('name'),
      password: data.get('password'),
    }
    console.log(payload);
    const res = await axios.post(server + '/auth/register', payload);
    console.log(res);
    navigate('../login')
  };
  return (
    <section className="sec1">
      <h2>Register</h2>

      <form className="queueform" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" className="form-control" placeholder="Enter Full Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="username">Email:</label>
          <input id="username" type="text" name="username" className="form-control" placeholder="Enter Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className="form-control" placeholder="Enter Password" required />
        </div>
        {/* <div className="formGroup">
          <label htmlFor="otp">OTP:</label>
          <button id="otpBtn" className="otpBtn" type="button" name="button">Send OTP</button>
          <input id="otp" type="number" name="otp" className="form-control" required />
        </div> */}
        <button id="regBtn" type="submit" name="button" className="subBtn">Register</button>
      </form>

      <p>Already have an account, <a href="/auth">Login</a></p>
    </section>
  )
}

export default Signup