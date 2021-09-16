import React from "react";

import { IIcon } from "../types";

const ChevronRight = ({ size = 48, props, className }: IIcon) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 41L33 24L16 7" stroke="black" stroke-width="6" />
    </svg>
  );
};

export default ChevronRight;
