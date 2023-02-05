import axios from "axios";
import { server } from "../constants";
import { useContext } from "react";
import { UserContext } from "../context";
export const handleSignup = async (data) => {
  try {
    const payload = {
      email: data.get("username"),
      fname: data.get("fname"),
      lname: data.get("lname"),
      password: data.get("password"),
    };
    let res = await axios.post(server + "/auth/register", payload);
    if (res && res.data) {
      res = res.data;
      let { meta, Data } = res;
      if (meta.Status && meta.code === 201) {
        return {
          success: true,
          message: meta.Message ? meta.Message : "Registration successful",
        };
      } else {
        return {
          success: false,
          message: meta.Message
            ? meta.Message
            : "Could not register. User might exist",
        };
      }
    } else {
      return {
        success: false,
        message: "Could not register due to server error",
      };
    }
  } catch (err) {
    return {
      success: false,
      message: "Could not register due to server error",
    };
  }
};

export const handleLogin = async (data) => {
  try {
    const payload = {
      email: data.get("username"),
      password: data.get("password"),
    };
    console.log(payload);
    let res = await axios.post(server + "/auth/login", payload);
    console.log(res);
    let resp;
    debugger
    if (res.status === 201 && res.data) {
      res = res.data;
      let { Data, meta } = res;
      if (meta.Status && Data.token) {
        localStorage.clear();
        localStorage.setItem("accessToken", Data.token);
        localStorage.setItem("isSignedIn", true);
        console.log({ ...localStorage });
        resp = { success: true, message: "Login successful" };
        // navigate("../");
      } else {
        resp = {
          success: false,
          message: "Login unsuccessful. Please try again later",
        };
      }
      // window.location.reload(true)
    } else {
      resp = {
        success: false,
        message: "Server error. Please try again later",
      };
    }
    return resp;
  } catch (err) {
    return { success: false, message: "Server error. Please try again later" };
  }
};
