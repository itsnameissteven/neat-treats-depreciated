import React, { useState, useEffect } from "react";
import classnames from "classnames";

import "./Hamburger.scss";

interface IHamburger {
  size?: string;
  className?: string;
  handleClick: () => void;
  isActive: boolean;
  pipes?: 2 | 3;
  animationTime?: string;
  color?: string;
  zIndex?: number;
  position?: {
    top: string;
    left: string;
    right: string;
  };
}

const Hamburger = ({
  size = "40px",
  className,
  handleClick,
  isActive,
  pipes = 3,
  animationTime = "400ms",
  color,
  zIndex,
  position,
}: IHamburger) => {
  const [isClicked, setIsClicked] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const topClass = classnames({
    ["animate-top"]: isActive,
    ["hamburger__top"]: !firstRender && !isActive,
  });
  const middleClass = classnames({
    ["animate-middle"]: isActive,
    ["hamburger__middle"]: !firstRender && !isActive,
  });
  const bottomClass = classnames({
    ["animate-bottom"]: isActive,
    ["hamburger__bottom"]: !firstRender && !isActive,
  });
  const topClassTwoPipe = classnames({
    ["animate-top--two"]: isActive,
    ["hamburger__top--two"]: !firstRender && !isActive,
  });
  const bottomClassTwoPipe = classnames({
    ["animate-bottom--two"]: isActive,
    ["hamburger__bottom--two"]: !firstRender && !isActive,
  });

  useEffect(() => {
    if (isClicked) {
      setFirstRender(false);
    }
  }, [isClicked]);

  const passedClick = () => {
    if (handleClick) {
      handleClick();
      setFirstRender(false);
    } else {
      setIsClicked(!isClicked);
    }
  };

  const { top, left, right } = position || {};

  const styles = {
    fill: color,
    zIndex,
    top,
    left,
    right,
  };

  const animationDuration = animationTime;

  if (pipes === 2) {
    return (
      <svg
        className={`hamburger ${className}`}
        width={size}
        height={size}
        style={styles}
        onClick={passedClick}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className={topClassTwoPipe}
          x="2"
          y="14"
          width="44"
          height="6"
          rx="3"
          fill="black"
          style={{ animationDuration }}
        />
        <rect
          className={bottomClassTwoPipe}
          x="2"
          y="28"
          width="44"
          height="6"
          rx="3"
          fill="black"
          style={{ animationDuration }}
        />
      </svg>
    );
  }

  return (
    <svg
      className={`hamburger ${className}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={styles}
      onClick={passedClick}
    >
      <rect
        className={topClass}
        x="2"
        y="6"
        width="44"
        height="6"
        rx="3"
        fill="black"
        style={{ animationDuration }}
      />
      <rect
        className={middleClass}
        x="2"
        y="21"
        width="44"
        height="6"
        rx="3"
        fill="black"
        style={{ animationDuration }}
      />
      <rect
        className={bottomClass}
        x="2"
        y="36"
        width="44"
        height="6"
        rx="3"
        fill="black"
        style={{ animationDuration }}
      />
    </svg>
  );
};

export default Hamburger;
