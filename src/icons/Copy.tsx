import React from "react";

import { IIcon } from "../types";

const Copy = ({ size = 48, color = "black", ...props }: IIcon) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 8C5.5 4.96243 7.96243 2.5 11 2.5H29C32.0376 2.5 34.5 4.96243 34.5 8V9.5H37C40.0376 9.5 42.5 11.9624 42.5 15V40C42.5 43.0376 40.0376 45.5 37 45.5H19C15.9624 45.5 13.5 43.0376 13.5 40V38.5H11C7.96243 38.5 5.5 36.0376 5.5 33V8ZM13.5 35.5V15C13.5 11.9624 15.9624 9.5 19 9.5H31.5V8C31.5 6.61929 30.3807 5.5 29 5.5H11C9.61929 5.5 8.5 6.61929 8.5 8V33C8.5 34.3807 9.61929 35.5 11 35.5H13.5ZM16.5 15C16.5 13.6193 17.6193 12.5 19 12.5H37C38.3807 12.5 39.5 13.6193 39.5 15V40C39.5 41.3807 38.3807 42.5 37 42.5H19C17.6193 42.5 16.5 41.3807 16.5 40V15Z"
        fill={color}
      />
    </svg>
  );
};

export default Copy;
