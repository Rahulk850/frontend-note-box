import React from "react";
import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import { Services } from "./Services/Services";
import { Navbar } from "./Navbar/Navbar";
import { Contact } from "./Contact/Contact";


const HomePage = () => {

  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Services/>
      <Contact/>
    </div>
  );
};

export default HomePage;
