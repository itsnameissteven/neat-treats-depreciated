import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";

import { Icon } from "..";

interface ICarousel {
  transitionTime?: number;
  children: JSX.Element | JSX.Element[];
}

const Carousel = ({ transitionTime = 300, children }: ICarousel) => {
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
    const newChildren = React.Children.map(children, (child) => {
      return React.cloneElement(child, { width: "100%" });
    });
    const firstSlide = newChildren[0];
    const lastSlide = newChildren[newChildren.length - 1];
    setSlidePanels([lastSlide, ...newChildren, firstSlide]);
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
