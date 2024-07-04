import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        "This delivery app has become my go-to for ordering food. The variety of restaurants available is impressive, and I appreciate how easy it is to navigate through the options. The order tracking feature is especially convenient, as it gives me peace of mind knowing exactly when my food will arrive.
         Plus, the delivery is always prompt and the food arrives hot and fresh. Highly recommend!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Joey</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "I've tried several delivery apps, but this one is by far the best. 
        The app itself is intuitive and user-friendly, making the ordering process a breeze. What sets it apart is the quality of customer service – anytime I've had an issue with an order, the support team has been incredibly responsive and helpful in resolving it. It's clear that they prioritize customer satisfaction.
         Overall, I'm consistently impressed with this app and will continue to use it regularly."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Monica</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        I love that I can order from my favorite local spots or discover new ones with just a few taps.
         The delivery drivers are always courteous, and my orders arrive in perfect condition. It's become an essential part of my busy lifestyle, 
        and I highly recommend it to anyone looking for convenient and reliable food delivery."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Chandler</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;