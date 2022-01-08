import React, { useRef, useEffect } from "react";
import "./ActionButton.scss";

const ActionButton = () => {
  const circleRef = useRef<SVGCircleElement>(null);

  const width = 120;
  const strokeWidth = 4;
  const radius = width / 2 - strokeWidth * 2;

  useEffect(() => {
    const { current } = circleRef;
    if (!current) {
      return;
    }
    const radius = current.r.baseVal.value;

    const circumference = radius * 2 * Math.PI;

    current.style.strokeDasharray = `${circumference} ${circumference}`;
    current.style.strokeDashoffset = `${circumference}`;
  }, [circleRef.current]);

  const setProgress = (percent: number) => {
    const { current } = circleRef;
    if (!current) return;
    const radius = current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percent / 100) * circumference;
    current.style.strokeDashoffset = offset.toString();
  };

  return (
    <button className="action-btn">
      <svg className="action-btn__progress-ring" height={width} width={width}>
        <circle
          className="action-btn__progress-ring__circle"
          stroke="grey"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={width / 2}
        />
        <circle
          ref={circleRef}
          className="action-btn__progress-ring__circle"
          stroke="black"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={width / 2}
          onMouseEnter={() => setProgress(100)}
          onMouseLeave={() => setProgress(0)}
        />
      </svg>
    </button>
  );
};

export default ActionButton;
