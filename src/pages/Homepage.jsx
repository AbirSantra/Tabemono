import React from "react";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default Homepage;
