import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import './carousel-styles.css';

import slide1DonationImage from "../images/slide1.png";
import slide2DonationImage from "../images/slide2.png";
import slide3DonationImage from "../images/slide3.png";

import React, { useState } from 'react';

export default function SlideShow() {
  const [imageSize, setImageSize] = useState({ width: '100%', height: '100%', opacity: '0.4' });

  const handleImageSizeChange = (newWidth, newHeight) => {
    setImageSize({ width: newWidth, height: newHeight });
  };

  return (
    <div className="carousel-container" style={{ width: '80%', margin: '0' }}>
      <Carousel>
        <Carousel.Item>
          <Image src={slide1DonationImage} alt="slide1-donation" style={{ width: imageSize.width, height: imageSize.height }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={slide2DonationImage} alt="slide2-donation" style={{ width: imageSize.width, height: imageSize.height }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={slide3DonationImage} alt="slide3-donation" style={{ width: imageSize.width, height: imageSize.height }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
