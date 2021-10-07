import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

import { Icon } from "..";

import "./Carousel.scss";

interface ICarousel {
  slides?: JSX.Element[];
}

const imagesPlaceholders = [
  <img className="carousel__slide__content" src={image1} alt="slide i" />,
  <img className="carousel__slide__content" src={image2} alt="slide i" />,
  <img className="carousel__slide__content" src={image3} alt="slide i" />,
];

const Carousel = ({ slides = imagesPlaceholders }: ICarousel) => {
  const [slidePanels, setSlidePanels] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const allSlides = slides.map((slide, i) => {
      return (
        <div className="carousel__slide" key={i}>
          <div className="carousel__slide__content">{slide}</div>
        </div>
      );
    });
    setSlidePanels(allSlides);
  }, []);

  const onNext = () => {
    const lastSlide = slidePanels.pop();
    if (lastSlide) {
      setSlidePanels([lastSlide, ...slidePanels]);
    }
  };

  const onPrev = () => {
    const firstSlide = slidePanels.shift();
    if (firstSlide) {
      setSlidePanels([...slidePanels, firstSlide]);
    }
  };

  return (
    <div className="carousel">
      <Icon name="chevron-left" onClick={onPrev} />
      {slidePanels}
      <Icon name="chevron-right" onClick={onNext} />
    </div>
  );
};

export default Carousel;
