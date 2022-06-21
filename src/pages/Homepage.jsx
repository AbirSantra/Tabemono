import React from "react";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../styles/Homepage.css";
import Testimonial from "../components/Testimonial";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
    </div>
  );
};

export default Homepage;
