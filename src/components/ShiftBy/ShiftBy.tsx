import React from "react";

interface IShiftByProps {
  x?: number;
  y?: number;
  children: JSX.Element[] | JSX.Element;
}

const ShiftBy = ({ x = 0, y = 0, children, ...rest }: IShiftByProps) => {
  return (
    <span
      {...rest}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </span>
  );
};

export default ShiftBy;
