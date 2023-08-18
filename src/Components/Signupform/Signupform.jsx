import React, { useContext, useEffect } from "react";
import "./Signupform.css";
import notesContext from "../../Context/notes/NotesContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Loader } from "../Loader/Loader";

export const Signupform = () => {
  const context = useContext(notesContext);
  const { succes, setSucces, sign, setSign, userSignup, loading } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      userSignup(sign);
      navigate("/allnotes");
    } else {
      navigate("/signup");
    }
  }, [localStorage.length]);

  const onChange = (e) => {
    console.log("called", e.target.name, e.target.value);
    setSign({ ...sign, [e.target.name]: e.target.value });
  };

  const Signup = (e) => {
    e.preventDefault();
    userSignup(sign);
    console.log(localStorage.getItem("auth-token"));
    console.log(succes);
    if (succes) {
      setTimeout(() => {
        console.log("inside settimeout");
        navigate("/allnotes");
        console.log(localStorage.getItem("auth-token"));
      }, 5000);
    }
    console.log("outside settimeout");
    setSucces(false);
  };
  const homeCome = () => {
    navigate("/");
  };
  const login1 = () => {
    navigate("/login");
  };
  return (
    <div className="form-container">
      <div className="close-btn-container">
        <AiOutlineCloseCircle className="close-btn" onClick={homeCome} />
      </div>
      <div className="loader-2">{loading && <Loader />}</div>
      <div className="login-form-container">
        <form className="login-form" action="">
          <h2>Signup</h2>
          <div className="input_container">
            <input
              className="form-input"
              type="text"
              placeholder="Enter your name"
              value={sign.name}
              name="name"
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="text">name</label>
          </div>
          <div className="input_container">
            <input
              className="form-input"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={sign.email}
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="Email">Email</label>
          </div>
          <div className="input_container">
            <input
              className="form-input"
              type="password"
              placeholder="Set your password"
              onChange={(e) => onChange(e)}
              value={sign.password}
              name="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="logform-btn-container">
            <button
              className="loginform-btn"
              type="submit"
              onClick={(e) => Signup(e)}
            >
              Signup
            </button>
          </div>
          <div className="home-btn-container">
            <button className="home-btn" onClick={login1}>
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
