import React from "react";

import { IIcon } from "../types";

const XCircleF = ({ size = 48, color = "black", ...props }: IIcon) => {
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
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM12.6863 15.5147C12.2958 15.1242 12.2958 14.491 12.6863 14.1005L14.1005 12.6863C14.491 12.2958 15.1242 12.2958 15.5147 12.6863L24 21.1716L32.4853 12.6863C32.8758 12.2958 33.509 12.2958 33.8995 12.6863L35.3137 14.1005C35.7042 14.491 35.7042 15.1242 35.3137 15.5147L26.8284 24L35.3137 32.4853C35.7042 32.8758 35.7042 33.509 35.3137 33.8995L33.8995 35.3137C33.509 35.7042 32.8758 35.7042 32.4853 35.3137L24 26.8284L15.5147 35.3137C15.1242 35.7042 14.491 35.7042 14.1005 35.3137L12.6863 33.8995C12.2958 33.509 12.2958 32.8758 12.6863 32.4853L21.1716 24L12.6863 15.5147Z"
        fill={color}
      />
    </svg>
  );
};

export default XCircleF;
