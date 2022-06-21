import React, { useState } from "react";
import "../styles/Navbar.css";
import navlogo from "../img/tabemonologoblack.png";
import {
  faCalendarCheck,
  faCircleInfo,
  faImage,
  faSquarePhone,
  faUtensils,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        {/* Nav Logo */}
        <div className="navbar__logo">
          <img
            src={navlogo}
            alt="tabemono company logo"
            className="navbar__logo--img"
          />
          <h1 className="navbar__logo--text">Tabemono</h1>
        </div>
        {/* Nav Links */}
        <div className="navbar__links--container">
          <div className="navbar__links--link">Menu</div>
          <div className="navbar__links--link">About</div>
          <div className="navbar__links--link">Gallery</div>
          <div className="navbar__links--link">Contact</div>
          <button className="navbar__links--btn">Book Table</button>
          <FontAwesomeIcon
            icon={faBars}
            className="navbar__links--menu"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div
        className={
          menu
            ? "container navbar__mobile--container slide-up"
            : "container navbar__mobile--container"
        }
      >
        <div className="navbar__mobile--links">
          <FontAwesomeIcon
            icon={faUtensils}
            className="navbar__mobile--link--icon"
          />
          <p className="navbar__mobile--link--text">Menu</p>
        </div>
        <div className="navbar__mobile--links">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="navbar__mobile--link--icon"
          />
          <p className="navbar__mobile--link--text">About</p>
        </div>
        <div className="navbar__mobile--links">
          <FontAwesomeIcon
            icon={faImage}
            className="navbar__mobile--link--icon"
          />
          <p className="navbar__mobile--link--text">Gallery</p>
        </div>
        <div className="navbar__mobile--links">
          <FontAwesomeIcon
            icon={faSquarePhone}
            className="navbar__mobile--link--icon"
          />
          <p className="navbar__mobile--link--text">Contact</p>
        </div>
        <div className="navbar__mobile--links">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className="navbar__mobile--link--icon"
          />
          <p className="navbar__mobile--link--text">Book</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
