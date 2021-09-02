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

  return (
    <svg
      className={`hamburger ${className}`}
      viewBox="0 0 110 100"
      width={size}
      height={size}
      style={styles}
      onClick={passedClick}
    >
      {pipes === 3 && (
        <rect
          className={topClass}
          width="110"
          height="16"
          rx="8"
          style={{ animationDuration }}
        ></rect>
      )}
      <rect
        className={middleClass}
        y="40"
        width="110"
        height="16"
        rx="8"
        style={{ animationDuration }}
      ></rect>
      <rect
        className={bottomClass}
        y="80"
        width="110"
        height="16"
        rx="8"
        style={{ animationDuration }}
      ></rect>
    </svg>
  );
};

export default Hamburger;
