import React, { useState, useMemo, useRef } from "react";
import classnames from "classnames";

import { Icon } from "..";

interface ICarousel {
  transitionTime?: number;
  children: JSX.Element | JSX.Element[];
  iconColor?: string;
  iconSize?: number;
  iconPrev?: string;
  iconNext?: string;
}

const Carousel = ({
  transitionTime = 300,
  iconColor = "#fff",
  iconSize = 34,
  children,
  iconPrev = "chevron-left",
  iconNext = "chevron-right",
}: ICarousel) => {
  const slidePanels = useMemo(() => {
    const newChildren = React.Children.map(children, (child) => {
      return React.cloneElement(child, { width: "100%" });
    });
    const firstSlide = newChildren[0];
    const lastSlide = newChildren[newChildren.length - 1];
    return [lastSlide, ...newChildren, firstSlide];
  }, [children]);
  const [activeIndex, setActiveIndex] = useState(1);
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
        name={iconPrev}
        onClick={() => handleClick(-1)}
        disabled={isDisabled}
        color={iconColor}
        size={iconSize}
      />
      <div
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
        name={iconNext}
        onClick={() => handleClick(1)}
        disabled={isDisabled}
        color={iconColor}
        size={iconSize}
      />
    </div>
  );
};

export default Carousel;
