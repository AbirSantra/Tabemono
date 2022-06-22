import React from "react";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../styles/Homepage.css";
import Testimonial from "../components/Testimonial";
import Specials from "../components/Specials";
// import Mobile from "../components/Mobile";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Specials />
      <Services />
      <Testimonial />
      {/* <Mobile /> */}
    </div>
  );
};

export default Homepage;
