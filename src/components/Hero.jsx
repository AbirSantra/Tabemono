import React, { useState } from "react";
import "../styles/Hero.css";
import blob from "../img/hero-blob.png";
import { heroImages } from "../api/hero-images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [idx, setIdx] = useState(0);

  const handleChange = () => {
    setIdx(idx < 2 ? idx + 1 : 0);
  };

  setTimeout(handleChange, 3000);

  return (
    <div className="hero">
      <div className="hero__container container">
        {/* Hero Text */}
        <div className="hero__container--text">
          <h1 className="hero__text--heading">
            Japanese Cuisine at its Finest
          </h1>
          <p className="hero__text--subheading">
            Experience authentic Japanese cuisine made by our specially trained
            Chefs right here in India only at Tabemono &copy;. Reserve your
            tables at your nearest Tabemono outlet now!
          </p>
          <button className="hero__text--btn">
            View Menu
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        {/* Hero Image */}
        <div className="hero__container--image">
          <img src={blob} alt="shape" className="hero__image--blob" />

          {heroImages.map((heroImage, index) => {
            return (
              <img
                key={index}
                src={heroImage}
                alt="ramen bowl"
                className={
                  index === idx
                    ? "hero__image--img hero__image--img--active"
                    : "hero__image--img"
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
