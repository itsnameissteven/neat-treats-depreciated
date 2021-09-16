import React from "react";

import { IIcon } from "../types";

const ChevronDown = ({ size = 48, props, className }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <path d="M7 16L24 33L41 16" stroke="black" stroke-width="6" />
    </svg>
  );
};

export default ChevronDown;
