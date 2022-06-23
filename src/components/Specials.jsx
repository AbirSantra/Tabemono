import React from "react";
import "../styles/Specials.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { specialMenu } from "../api/specials";

const Specials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul style={{ margin: "-10px" }}> {dots} </ul>
      </div>
    ),
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section specials">
      <div className="container specials__container">
        <div className="specials__header">
          <div className="specials__header--block"></div>
          <h1 className="specials__header--title">Today's Special Deals</h1>
        </div>
        <div className="specials__slider--container">
          <Slider {...settings}>
            {specialMenu.map((item, index) => (
              <div className="specials__card--container">
                <div className="specials__card" key={index}>
                  <div className="specials__card--image">
                    <img src={item.img} alt="ramen" />
                  </div>
                  <h3 className="specials__card--name">{item.name}</h3>
                  <div className="specials__card--cat-rate">
                    <p className="specials__card--category">{item.category}</p>
                    <p className="specials__card--rating">
                      {item.rating}
                      <FontAwesomeIcon
                        icon={faStar}
                        className="specials__card--rating-star"
                      />
                    </p>
                  </div>
                  <div className="specials__card--prices">
                    <p className="specials__card-price">{item.price}</p>
                    <p className="specials__card-disc">{item.dis}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Specials;
