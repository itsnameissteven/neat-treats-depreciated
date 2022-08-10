import React from "react";
import classnames from "classnames";
import { usePreventAnimation } from "../../hooks";

interface IHamburger {
  size?: string;
  className?: string;
  onClick?: () => void;
  onMouseDown?: () => void;
  pipes?: 2 | 3;
  animationTime?: string;
  color?: string;
  zIndex?: number;
  position?: {
    top: string;
    left: string;
    right: string;
  };
  isActive: boolean;
}

const Hamburger = ({
  size = "30px",
  className,
  onClick = () => null,
  onMouseDown = () => null,
  pipes = 3,
  animationTime = "400ms",
  color,
  zIndex,
  position,
  isActive,
}: IHamburger) => {
  const { noAnimation } = usePreventAnimation();

  const topClass = classnames("hamburger__top", {
    "animate-top": isActive,
  });
  const middleClass = classnames(" hamburger__middle", {
    "animate-middle": isActive,
  });
  const bottomClass = classnames("hamburger__bottom", {
    "animate-bottom": isActive,
  });
  const topClassTwoPipe = classnames("hamburger__top--two", {
    "animate-top--two": isActive,
  });
  const bottomClassTwoPipe = classnames("hamburger__bottom--two", {
    "animate-bottom--two": isActive,
  });

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
        className={`hamburger ${className} ${noAnimation}`}
        width={size}
        height={size}
        style={styles}
        onMouseDown={onMouseDown}
        onClick={onClick}
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
      className={`hamburger ${className} ${noAnimation}`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={styles}
      onClick={onClick}
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
