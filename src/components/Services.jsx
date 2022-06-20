import React from "react";
import "../styles/Services.css";
import chef from "../img/services-chef.jpg";

const Services = () => {
  return (
    <div className="services section">
      <div className="container services__container">
        {/* About Image Section */}
        <div className="services__image--container">
          <img
            src={chef}
            alt="chef services"
            className="services__image--img"
          />
        </div>
        {/* About Text Section */}
        <div className="services__text--container">
          <div className="services__text--heading">
            <div className="services__block"></div>
            <h1 className="services__text--title">Our Services</h1>
          </div>
          <p className="services__text--subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aut rerum saepe ut ipsa voluptatum quaerat, facere delectus commodi
            voluptate?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
