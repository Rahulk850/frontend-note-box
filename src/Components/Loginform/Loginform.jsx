import React, { useContext, useEffect } from "react";
import "./Loginform.css";
import logContext from "../../Context/notes/NotesContext";
import {  redirect, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Loader } from "../Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Loginform = () => {
  const navigate = useNavigate();
  const context = useContext(logContext);
  const { userLogin, login, setLogin, fetchAll , loading,setLoading ,getUser , message} =
    context;
    // const[redirect , setRedirect] = useState(fale);

    const showToastMessage = () => {
      toast.error('Wrong credentials !', {
          position: toast.POSITION.TOP_CENTER
      });}

    useEffect(() => {
    // console.log("inside useefeect");
    if (localStorage.getItem("auth-token")) {
      // userLogin(login);
      getUser();
      fetchAll();

      setLoading(true);
      setTimeout(() => {
        navigate("/allnotes");
        setLoading(false);

      }, 1000);
    }
    // else{
    //   setLoading(false);
    //   console.log("wrong credentials");
    //   showToastMessage();
    // }
    // setLoading(false);
  }, [localStorage.length]);

  const onChange = (e) => {
    console.log("called", e.target.name, e.target.value);
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const Login = (e) => {
    e.preventDefault();
    userLogin(login);
    console.log(message);
    // console.log(succes);
    // if (succes === true) {
    //     setTimeout(() => {
    //     navigate("/allnotes");
    //     fetchAll();
    //     // showToastMessage();
    //   }, 5000);
    }
    // else{
      // console.log("wrong credentials");
      // setLoading(false);
      // showToastMessage();
    // }
    // console.log("outside settimeout");
  //   setSucces(false);
  // };

  const homeCome = () => {
    navigate("/");
  };
  const sign1 = () => {
    navigate("/signup");
  };

  console.log('loader login page ', loading)

  return (
    <>
      {/* <Navbar/> */}

      <div className="form-container">
      {/* <div className="loader-2"> */}
       { loading && <Loader/>}
       {/* { loading && 'loading....'} */}
        {/* </div> */}

         {/* <Loader2/> */}
        <div className="close-btn-container">
          <AiOutlineCloseCircle className="close-btn" onClick={homeCome} />
        </div>
        <div className="login-form-container">
          <form className="login-form" action="">
            {/* <input className="name-form"type="text"placeholder='Enter your name' /> */}
            <h2>Login</h2>
            <div className="input_container">
              <input
                className="form-input"
                type="email"
                placeholder="Enter your email"
                value={login.email}
                name="email"
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="input_container">
              <input
                className="form-input"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={login.password}
                onChange={(e) => onChange(e)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="logform-btn-container">
              <button
                onClick={(e) => Login(e)}
                className="loginform-btn"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="home-btn-container">
              <button className="home-btn" onClick={sign1}>
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
