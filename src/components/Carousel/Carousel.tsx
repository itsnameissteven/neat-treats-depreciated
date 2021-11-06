import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';

import { Icon } from '..';

import './Carousel.scss';

interface ICarousel {
  slides?: JSX.Element[];
}

const imagesPlaceholders = [
  <img className="carousel__slide__content" src={image1} alt="slide i" />,
  <img className="carousel__slide__content" src={image2} alt="slide i" />,
  <img className="carousel__slide__content" src={image3} alt="slide i" />,
];

const Carousel = ({ slides = imagesPlaceholders }: ICarousel) => {
  const [slidePanels, setSlidePanels] = useState<JSX.Element[]>(slides);
  const [direction, setDirection] = useState<'left' | 'right' | ''>('');

  const slideClassNames = classNames({
    carousel__slide__content: true,
    'carousel__slide__content--left': direction === 'left',
    'carousel__slide__content--right': direction === 'right',
  });

  const allSlides = slidePanels.map((slide, i) => {
    return (
      <div className="carousel__slide" key={i}>
        <div className={slideClassNames}>{slide}</div>
      </div>
    );
  });

  useEffect(() => {
    if (direction === 'right') {
      const resetDirection = setTimeout(() => {
        // fix this to reset state
        slidePanels.shift();
        setDirection('');
      }, 1000);
      return () => clearTimeout(resetDirection);
    }
    if (direction === 'left') {
      const resetDirection = setTimeout(() => {
        setDirection('');
      }, 1000);
      return () => clearTimeout(resetDirection);
    }
    return;
  }, [direction]);

  const onNext = () => {
    setDirection('');
    setDirection('right');
    setSlidePanels((slides) => [...slides, slides[0]]);
  };

  const onPrev = () => {
    setDirection('');
    setDirection('left');
    const lastSlide = slidePanels.pop();
    if (lastSlide) {
      setSlidePanels((slides) => [lastSlide, ...slides]);
    }
  };

  return (
    <div className="carousel">
      <Icon
        className="carousel__prev"
        name="chevron-left"
        onClick={onPrev}
        disabled={direction.length > 0}
      />
      {allSlides}
      <Icon
        className="carousel__next"
        name="chevron-right"
        onClick={onNext}
        disabled={direction.length > 0}
      />
    </div>
  );
};

export default Carousel;
