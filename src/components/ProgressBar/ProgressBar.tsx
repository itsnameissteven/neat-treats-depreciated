import React from "react";

interface IPercentageBarProps {
  /** Size of the progress ring */
  height?: string;
  /** Initial border color */
  background?: string;
  /** Color of completed color */
  completedBorder?: string;
  /** Amount completed */
  percentageComplete: number;
  /** Optional classname to pass to parent element */
  className?: string;
  /** Style overrides */
  style?: React.CSSProperties;
}

const ProgressBar = ({
  height = "5px",
  background = "#ade8f4",
  completedBorder = "#0077b6",
  percentageComplete,
  className = "",
  style = {},
}: IPercentageBarProps) => {
  return (
    <div
      className={`progress-bar ${className}`}
      style={{
        height: height,
        minHeight: height,
        width: "100%",
        backgroundColor: background,
        ...style,
      }}
    >
      <div
        className="progress-bar__inner"
        style={{
          width: `${percentageComplete}%`,
          backgroundColor: completedBorder,
        }}
      />
    </div>
  );
};

export default ProgressBar;
