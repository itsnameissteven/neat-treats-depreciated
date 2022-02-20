import React, { useRef, useEffect } from "react";
import { usePreventAnimation } from "../../hooks";

interface IPercentageCircleProps {
  /** Size of the progress ring */
  size?: number;
  /** Thickness of Strock */
  stroke?: number;
  /** Initial border color */
  border?: string;
  /** Color of completed color */
  completeBorder?: string;
  /** Amount completed */
  percentageComplete: number;
  /** Optional classname to pass to parent element */
  className?: string;
  /** Toggle to display percentage compent */
  hasPercentageDisplay?: boolean;
}

const ProgressRing = ({
  size = 70,
  stroke = 3,
  border = "#ade8f4",
  completeBorder = "#0077b6",
  percentageComplete,
  className = "",
  hasPercentageDisplay = true,
}: IPercentageCircleProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const width = size;
  const strokeWidth = stroke;
  const radius = width / 2 - strokeWidth * 2;
  const { noTransition } = usePreventAnimation();

  useEffect(() => {
    const { current } = circleRef;

    if (!current) {
      return;
    }
    const radius = current.r.baseVal.value;

    const circumference = radius * 2 * Math.PI;

    current.style.strokeDasharray = `${0} ${circumference}`;
    current.style.strokeDashoffset = `${circumference}`;

    const setProgress = (percent: number) => {
      const { current } = circleRef;
      if (!current) return;
      const radius = current.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      const offset = circumference - (percent / 100) * circumference;
      current.style.strokeDasharray = `${circumference} ${circumference}`;
      current.style.strokeDashoffset = offset.toString();
    };
    setProgress(percentageComplete);
  }, [circleRef.current, percentageComplete, size, stroke]);

  return (
    <div className={`progress-circle ${className} ${noTransition}`}>
      <svg className="progress-circle__ring" height={width} width={width}>
        <circle
          className="progress-circle__ring__border"
          stroke={border}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={width / 2}
        />
        <circle
          ref={circleRef}
          className="progress-circle__ring__border"
          stroke={completeBorder}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={width / 2}
          cy={width / 2}
        />
      </svg>
      {hasPercentageDisplay && (
        <div className={"progress-circle__content"}>
          <p style={{ fontSize: `${size * 0.25}px` }}>{percentageComplete}%</p>
        </div>
      )}
    </div>
  );
};

export default ProgressRing;
