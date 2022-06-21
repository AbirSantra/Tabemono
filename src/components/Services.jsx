import React from "react";
import "../styles/Services.css";
import chef from "../img/services-chef.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faChampagneGlasses,
  faClock,
  faTruck,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="services__text--features">
            <div className="services__feature--container">
              <FontAwesomeIcon
                icon={faClock}
                className="services__feature--icon"
              />
              <p className="services__feature--label">We are Open 24/7</p>
            </div>
            <div className="services__feature--container">
              <FontAwesomeIcon
                icon={faChampagneGlasses}
                className="services__feature--icon"
              />
              <p className="services__feature--label">Bar Available</p>
            </div>
            <div className="services__feature--container">
              <FontAwesomeIcon
                icon={faBowlFood}
                className="services__feature--icon"
              />
              <p className="services__feature--label">Top Quality Food</p>
            </div>
            <div className="services__feature--container">
              <FontAwesomeIcon
                icon={faTruck}
                className="services__feature--icon"
              />
              <p className="services__feature--label">
                Takeout & Delivery available
              </p>
            </div>
          </div>
          <button className="services__text--btn">
            Learn More
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
