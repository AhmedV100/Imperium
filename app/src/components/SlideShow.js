import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./carousel-styles.css";
import "./carousel-image.css";

import slide1DonationImage from "../images/slide1.png";
import slide2DonationImage from "../images/slide2.png";
import slide3DonationImage from "../images/slide3.png";

import React, { useState } from "react";

export default function SlideShow() {
  return (
    <div
      className="carousel-container"
    >
      <Carousel interval={11000}>
        {" "}
        {/* Set interval to 11000 milliseconds (11 seconds) */}
        <Carousel.Item>
          <Image
            src={slide1DonationImage}
            alt="slide1-donation"
            className="carousel-img"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={slide2DonationImage}
            alt="slide2-donation"
            className="carousel-img"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={slide3DonationImage}
            alt="slide3-donation"
            className="carousel-img"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
