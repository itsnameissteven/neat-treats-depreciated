import React, { useRef, useEffect, useState } from "react";
import "./ActionButton.scss";
import { preventAnimation } from "../../utils";
interface IActionButton {
  size: number;
  stroke: number;
  onClick: () => void;
  border?: string;
  activeBorder?: string;
  animationDirection?: "up" | "down" | "left" | "right";
  className?: string;
  children: JSX.Element | string;
}

const ActionButton = ({
  size,
  stroke,
  border = "grey",
  activeBorder = "black",
  animationDirection,
  children,
  className = "",
  onClick,
}: IActionButton) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { noAnimation } = preventAnimation(!isLoaded);

  const width = size;
  const strokeWidth = stroke;
  const radius = width / 2 - strokeWidth * 2;

  const animationClass = animationDirection
    ? `animation-${animationDirection}`
    : "";

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  useEffect(() => {
    const { current } = circleRef;

    if (!current) {
      return;
    }
    const radius = current.r.baseVal.value;

    const circumference = radius * 2 * Math.PI;

    current.style.strokeDasharray = `${0} ${circumference}`;
    current.style.strokeDashoffset = `${circumference}`;
  }, [circleRef.current]);

  const setProgress = (percent: number) => {
    const { current } = circleRef;
    if (!current) return;
    const radius = current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percent / 100) * circumference;
    current.style.strokeDasharray = `${circumference} ${circumference}`;
    current.style.strokeDashoffset = offset.toString();
  };

  return (
    <button className={`action-btn ${className}`} onClick={onClick}>
      <svg className="action-btn__progress-ring" height={width} width={width}>
        <circle
          className="action-btn__progress-ring__circle"
          stroke={border}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={width / 2}
        />
        <circle
          ref={circleRef}
          className={`action-btn__progress-ring__circle`}
          stroke={activeBorder}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={width / 2}
          onMouseEnter={() => setProgress(100)}
          onMouseLeave={() => setProgress(0)}
        />
      </svg>
      <div className={`action-btn__content ${animationClass} ${noAnimation}`}>
        {children}
      </div>
    </button>
  );
};

export default ActionButton;
