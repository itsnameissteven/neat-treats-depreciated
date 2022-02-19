import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { usePreventAnimation } from "../../hooks";

import { Icon } from "..";

interface ICarousel {
  slides?: JSX.Element[];
  transitionTime?: number;
}

const Carousel = ({
  slides = [<h1>1</h1>, <h2>2</h2>, <h3>3</h3>],
  transitionTime = 300,
}: ICarousel) => {
  const [slidePanels, setSlidePanels] = useState<JSX.Element[]>([]);
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isNoTransition, setIsNoTransition] = useState(false);

  const slideClass = classnames("carousel__slide", {
    "no-transition": isNoTransition,
  });

  const allSlides = slidePanels.map((slide, i) => {
    return (
      <div className="carousel__slide__item" key={i}>
        {slide}
      </div>
    );
  });

  useEffect(() => {
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];
    setSlidePanels([lastSlide, ...slides, firstSlide]);
  }, []);

  const resetlocation = () => {
    setIsDisabled(false);
    if (activeIndex === 0) {
      setIsNoTransition(true);
      setActiveIndex(slidePanels.length - 2);
    } else if (activeIndex === slidePanels.length - 1) {
      setActiveIndex(1);
      setIsNoTransition(true);
    }
  };

  const handleClick = (n: number) => {
    setActiveIndex(activeIndex + n);
    setIsDisabled(true);
    setIsNoTransition(false);
  };

  return (
    <div className="carousel">
      <Icon
        className="carousel__prev"
        name="chevron-left"
        onClick={() => handleClick(-1)}
        disabled={isDisabled}
      />
      <div
        ref={sliderRef}
        onTransitionEnd={resetlocation}
        className={slideClass}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transitionDuration: `${transitionTime}ms`,
        }}
      >
        {allSlides}
      </div>
      <Icon
        className="carousel__next"
        name="chevron-right"
        onClick={() => handleClick(1)}
        disabled={isDisabled}
      />
    </div>
  );
};

export default Carousel;
