import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./carousel-styles.css";

import slide1DonationImage from "../images/slide1.png";
import slide2DonationImage from "../images/slide2.png";
import slide3DonationImage from "../images/slide3.png";

import React, { useState } from "react";

export default function SlideShow() {
  return (
    <div
      className="carousel-container"
    >
      <Carousel interval={12000}>
        {" "}
        {/* Set interval to 12000 milliseconds (12 seconds) */}
        <Carousel.Item>
          <Image
            src={slide1DonationImage}
            alt="slide1-donation"
            className="carousel-img"
          />
          <Carousel.Caption>
            <p>Through this platform, we provide a space for individuals, groups, and organizations to 
              connect and support causes they are passionate about. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={slide2DonationImage}
            alt="slide2-donation"
            className="carousel-img"
          />
          <Carousel.Caption>
            <p>From volunteering opportunities to in-kind donations, our website serves as a hub for those eager 
              to make a difference in the lives of others and in their communities. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={slide3DonationImage}
            alt="slide3-donation"
            className="carousel-img"
          />
          <Carousel.Caption>
            <p>Start exploring, start giving, and let your generosity spark change! </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
