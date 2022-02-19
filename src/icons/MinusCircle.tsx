import React from "react";

import { IIcon } from "../types";

const MinusCircle = ({ size = 48, color = "black", ...props }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM9 25C9 25.5523 9.44772 26 10 26H38C38.5523 26 39 25.5523 39 25V23C39 22.4477 38.5523 22 38 22H10C9.44772 22 9 22.4477 9 23V25Z"
        fill={color}
      />
    </svg>
  );
};

export default MinusCircle;
