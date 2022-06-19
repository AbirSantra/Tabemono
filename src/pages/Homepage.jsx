import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
