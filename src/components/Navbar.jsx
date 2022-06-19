import React from "react";
import "../styles/Navbar.css";
import navlogo from "../img/tabemonologoblack.png";

const Navbar = () => {
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
