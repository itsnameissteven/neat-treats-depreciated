import React, { useState, useEffect } from "react";
import classnames from "classnames";

interface IHamburger {
  size?: string;
  className?: string;
  onClick: () => void;
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
  size = "30px",
  className,
  onClick,
  pipes = 3,
  animationTime = "400ms",
  color,
  zIndex,
  position,
}: IHamburger) => {
  const [isClicked, setIsClicked] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const topClass = classnames({
    ["animate-top"]: isClicked,
    ["hamburger__top"]: !firstRender && !isClicked,
  });
  const middleClass = classnames({
    ["animate-middle"]: isClicked,
    ["hamburger__middle"]: !firstRender && !isClicked,
  });
  const bottomClass = classnames({
    ["animate-bottom"]: isClicked,
    ["hamburger__bottom"]: !firstRender && !isClicked,
  });
  const topClassTwoPipe = classnames({
    ["animate-top--two"]: isClicked,
    ["hamburger__top--two"]: !firstRender && !isClicked,
  });
  const bottomClassTwoPipe = classnames({
    ["animate-bottom--two"]: isClicked,
    ["hamburger__bottom--two"]: !firstRender && !isClicked,
  });

  useEffect(() => {
    if (isClicked) {
      setFirstRender(false);
    }
  }, [isClicked]);

  const passedClick = () => {
    setIsClicked(!isClicked);
    onClick && onClick();
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
