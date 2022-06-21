import React from "react";
import "../styles/Testimonial.css";
import { testimonials } from "../api/testimonial";

const Testimonial = () => {
  return (
    <div className="testimonial section">
      <div className="container testimonial__container">
        <div className="testimonial__heading">
          <div className="testimonial__heading--block"></div>
          <h1 className="testimonial__heading--title">
            What Our Customers Are Saying
          </h1>
        </div>
        <div className="testimonial__cards--container">
          {testimonials.map((person, index) => {
            return (
              <div className="testimonial__card">
                <p className="testimonial__card--review">
                  <span>" </span>
                  {person.review}
                  <span> "</span>
                </p>
                <div className="testimonial__card--header">
                  <img
                    src={person.img}
                    alt="person"
                    className="testimonial__card--img"
                  />
                  <div className="testimonial__card--heading">
                    <h2 className="testimonial__heading--name">
                      {person.name}
                    </h2>
                    <p className="testimonial__heading--type">{person.type}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
