import React from "react";
import { Hero } from "./Hero/Hero";
import { About } from "./About/About";
import { Services } from "./Services/Services";
import { Navbar } from "./Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default HomePage;
