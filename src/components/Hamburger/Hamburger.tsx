import React, { useState, useEffect } from "react";
import classnames from "classnames";

import "./Hamburger.scss";

interface IHamburger {
  size?: number;
  className?: string;
  isClicked?: boolean;
}

const Hamburger = ({ size = 40, className, isClicked = false }: IHamburger) => {
  const [firstRender, setFirstRender] = useState(true);
  const topClass = classnames({
    ["animate-top"]: isClicked,
    ["hamburger__top"]: !isClicked && !firstRender,
  });
  const middleClass = classnames({
    ["animate-middle"]: isClicked,
    ["hamburger__middle"]: !isClicked && !firstRender,
  });
  const bottomClass = classnames({
    ["animate-bottom"]: isClicked,
    ["hamburger__bottom"]: !isClicked && !firstRender,
  });

  useEffect(() => {
    if (isClicked) {
      setFirstRender(false);
    }
  }, [isClicked]);

  return (
    <svg
      className={`hamburger ${className}`}
      viewBox="0 0 110 100"
      width={size}
      height={size}
    >
      <rect className={topClass} width="110" height="16" rx="8"></rect>
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
