import React from "react";

import { IIcon } from "../types";

const ChevronLeft = ({ size = 48, props }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M32 7L15 24L32 41" stroke="black" stroke-width="6" />
    </svg>
  );
};

export default ChevronLeft;
