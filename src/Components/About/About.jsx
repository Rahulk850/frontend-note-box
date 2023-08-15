import React from 'react'
import './About.css'
import pri_img from './privacy-img.jpg'

export const About = () => {

  
  return (
    <div id = 'about'>
        <>
        <div className="about-container">
            <div className="upr-txt">
            <h2 className='about-hading'> Why choose us ?</h2>
            <p className='about-para'>"We are a leading cloud-based diary web application, providing a seamless and secure platform for users to document and cherish their memories, thoughts, and experiences, anytime and anywhere."</p>
            </div>
            <div className="lower-txt">
                <div className="privacy-txt">
                    <h2 className='about-hading'>Privacy is our #1 Concern</h2>
              <p className='about-para'>
                 "At our cloud-based diary app, your privacy is our top priority. We employ robust encryption and security measures to safeguard your personal data, ensuring that your entries remain confidential and accessible only to you."
                </p> 
                </div>
                <div className="privacy-img">
                 <img src={pri_img} alt="" />
                </div>
            </div>
        </div>
        </>
    </div>
  )
}
