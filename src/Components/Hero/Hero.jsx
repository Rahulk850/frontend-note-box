import React from 'react'
import notebook from './notebook.jpg'
import './Hero.css'
import { useRef } from 'react'

export const Hero = () => {
  
  // const ref = useRef(null);
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});

  // }
  return (
   <>
   <div className="hero-container" id='home'>
    <div className="text-container">
   <p>"Securely record your thoughts and experiences online with our intuitive cloud-based diary platform."</p>
   <button className="hero-btn">
    Start Your Journey
   </button>
    </div>
    <div className="img-container">
        <img src={notebook} alt="" />
    </div>
   </div>
   </>
  )
}
