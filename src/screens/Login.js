import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../context'
import axios from 'axios';
import { server } from '../constants';
import '../assets/styles/header.css'
import '../assets/styles/index.css'
function Login() {
  const userCtx = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        // eslint-disable-next-line no-console
        const payload = {
          email: data.get('username'),
          password: data.get('password'),
        }
        console.log(payload);
        const res = await axios.post(server + '/auth/login', payload);
        console.log(res);
        if(res.status === 200 && res.data){
            localStorage.clear()
            userCtx.setUsername(res.data['user'].email);
            localStorage.setItem("username", res.data.user.email);
            localStorage.setItem("userId", res.data.user.id);
            localStorage.setItem("accessToken", res.data["tokens"].access.token);
            localStorage.setItem("refreshToken", res.data["tokens"].refresh.token);
            localStorage.setItem("isSignedIn", true)
            console.log({...localStorage})
            navigate('../')
            // window.location.reload(true);

        }
      };

  return (
    <section className="sec1">
      <h2>Login</h2>

      <form className="queueform" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="username">Email:</label>
          <input type="text" name="username" className="form-control" placeholder="Enter Email" />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className="form-control" placeholder="Enter Password" />
        </div>
        <button type="submit" name="button" className="subBtn">Login</button>
      </form>

      <p>If you do not have an account already, <Link to="/login">Register</Link></p>
    </section>
  )
}

export default Login