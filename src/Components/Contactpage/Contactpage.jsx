import React from 'react'
import "./Contactpage.css"
import  { useEffect, useRef, useState } from "react";

export const Contactpage = () => {


    const [login, setLogin] = useState({ user_name: "", user_email: "" , user_msg:"" });
    const [load, setLoad] = useState(false);

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        console.log(load);
        emailjs.sendForm('service_mi4z547', 'template_bj7u9du', form.current, 'ySB5uyJKSuwWAOFUs')
        .then((result) => {
          console.log(result.text);
          setLoad(false);
        }, (error) => {
          console.log(error.text);
          setLoad(false);
        });

        console.log(load);
      };

      const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoad(true);
        const data = await fetch('http://localhost:5001/api/contact', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name:login.user_name,email:login.user_email,message:login.user_msg}),
          });
        console.log(data)
        setLogin({user_name: "", user_email: "" , user_msg:""});
        console.log(login);
      }


      const onChange = (e) => {
        // console.log("called", e.target.name, e.target.value);
        setLogin({ ...login, [e.target.name]: e.target.value });
      };

  return (
    <div className="contact-container">
      <div className="left-contact">
        <div className="contact-head">
            <p>Contact</p>
        </div>
        <div className="reach-out-me">
            <p>Reach Out Me</p>
        </div>
        <div className="location-txt">
            <p>Khairthal , Alwar , Rajasthan 301404</p>
            <p>Bharat</p>
        </div>
        <div className="connections">
            <div className="con-1">
            <p>+8505067715</p>
            </div>
            <div className="con2">
             <p>rjeet7274@gmail.com</p>
            </div>
        </div>
        <div className="s-media">
             <p><a href="https://www.linkedin.com/in/rahul-kumar-3774131ba" target="blank">LINKED IN</a></p>
             <p><a href="https://github.com/Rahulk850" target="blank">GITHUB</a></p>
             <p><a href="https://twitter.com/Trilok19080605" target="blank">TWITTER</a></p>
             <p><a href="https://discord.gg/DDWGUY5N" target="blank">DISCORD</a></p>
        </div>
      </div>
      <div className="right-contact">
        <div className="form-content">
          <div className="form-heading">
            <p>ANY ENQUIRY ?</p>
          </div>
          <div className="form-details">
            <form action="" ref={form}>
              <div className="form-1">
                <div>
                  <input
                    className="inp inp-1"
                    type="text"
                    placeholder="NAME"
                    required
                    name="user_name"
                    value={login.user_name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div>
                  <input
                    className="inp inp-2"
                    type="email"
                    placeholder="EMAIL"
                    name="user_email"
                    value={login.user_email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-2">
                <div>
                  <textarea
                    className="inp inp-3"
                    type="text"
                    placeholder="MESSAGE"
                    rows="4"
                    required
                    name="user_msg"
                    value={login.user_msg}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="submit-btn-container" >
                  <div className="submit-btn" onClick={(e) => handleSubmit(e)}>
                 {  load && <span className="loader"></span>}
                     Submit Now
                    {/* <img src={} alt="" /> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
