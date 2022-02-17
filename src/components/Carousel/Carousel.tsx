import React, { useState, useEffect } from "react";
import classNames from "classnames";

import { Icon } from "..";

interface ICarousel {
  slides?: JSX.Element[];
}

const Carousel = ({ slides = [<h1>hi</h1>] }: ICarousel) => {
  const [slidePanels, setSlidePanels] = useState<JSX.Element[]>(slides);
  const [direction, setDirection] = useState<"left" | "right" | "">("");

  const slideClassNames = classNames({
    carousel__slide__content: true,
    "carousel__slide__content--left": direction === "left",
    "carousel__slide__content--right": direction === "right",
  });

  const allSlides = slidePanels.map((slide, i) => {
    return (
      <div className="carousel__slide" key={i}>
        <div className={slideClassNames}>{slide}</div>
      </div>
    );
  });

  useEffect(() => {
    if (direction === "right") {
      const resetDirection = setTimeout(() => {
        // fix this to reset state
        slidePanels.shift();
        setDirection("");
      }, 1000);
      return () => clearTimeout(resetDirection);
    }
    if (direction === "left") {
      const resetDirection = setTimeout(() => {
        setDirection("");
      }, 1000);
      return () => clearTimeout(resetDirection);
    }
    return;
  }, [direction]);

  const onNext = () => {
    setDirection("");
    setDirection("right");
    setSlidePanels((slides) => [...slides, slides[0]]);
  };

  const onPrev = () => {
    setDirection("");
    setDirection("left");
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
