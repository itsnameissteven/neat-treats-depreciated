import React from "react";

interface ISpacerProps {
  size: number;
  axis?: "vertical" | "horizontal";
  nonSquareSpace?: number;
  color?: string;
  style?: React.CSSProperties;
  isRounded?: boolean;
}

const Spacer = ({
  size,
  axis,
  style = {},
  color = "transparent",
  nonSquareSpace = 1,
  isRounded = false,
  ...delegated
}: ISpacerProps) => {
  const width = axis === "vertical" ? nonSquareSpace : size;
  const height = axis === "horizontal" ? nonSquareSpace : size;
  return (
    <span
      style={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        backgroundColor: color,
        borderRadius: isRounded ? "50px" : "0px",
        ...style,
      }}
      {...delegated}
    />
  );
};
export default Spacer;
