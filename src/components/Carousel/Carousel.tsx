import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

import "./Carousel.scss";

interface ICarousel {
  images: string[];
}

const imagesPlaceholders = [image1, image2, image3];

const Carousel = ({ images = imagesPlaceholders }: ICarousel) => {
  const createSlides = () => {
    return images.map((image, i) => {
      return (
        <div className="carousel__slide" key={i}>
          <img className="carousel__slide__content" src={image} alt="slide i" />
        </div>
      );
    });
  };

  return <div className="carousel">{createSlides()}</div>;
};

export default Carousel;
