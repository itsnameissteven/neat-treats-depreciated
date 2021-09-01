import React, { useState, useEffect } from "react";
import classnames from "classnames";

import "./Hamburger.scss";

interface IHamburger {
  size?: string;
  className?: string;
  handleClick?: () => void;
  isActive?: boolean;
  pipes?: 2 | 3;
}

const Hamburger = ({
  size = "40px",
  className,
  handleClick,
  isActive,
  pipes = 3,
}: IHamburger) => {
  const [isClicked, setIsClicked] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const topClass = classnames({
    ["animate-top"]: isClicked || isActive,
    ["hamburger__top"]: !isClicked && !firstRender && !isActive,
  });
  const middleClass = classnames({
    ["animate-middle"]: isClicked || isActive,
    ["hamburger__middle"]: !isClicked && !firstRender && !isActive,
  });
  const bottomClass = classnames({
    ["animate-bottom"]: isClicked || isActive,
    ["hamburger__bottom"]: !isClicked && !firstRender && !isActive,
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

  return (
    <svg
      className={`hamburger ${className}`}
      viewBox="0 0 110 100"
      width={size}
      height={size}
      onClick={passedClick}
    >
      {pipes === 3 && (
        <rect className={topClass} width="110" height="16" rx="8"></rect>
      )}
      <rect
        className={middleClass}
        y="40"
        width="110"
        height="16"
        rx="8"
      ></rect>
      <rect
        className={bottomClass}
        y="80"
        width="110"
        height="16"
        rx="8"
      ></rect>
    </svg>
  );
};

export default Hamburger;
