import React from "react";

import { IIcon } from "../types";

const ChevronCircleLeft = ({ size = 48, color = "black", props }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM14.5858 25.5061C13.8047 24.7251 13.8047 23.4587 14.5858 22.6777L16.7071 20.5564L28.7279 8.53554L32.2635 12.0711L20.2426 24.0919L32.2635 36.1127L28.7279 39.6482L16.7071 27.6274L14.5858 25.5061Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM14.5858 25.5061C13.8047 24.7251 13.8047 23.4587 14.5858 22.6777L16.7071 20.5564L28.7279 8.53554L32.2635 12.0711L20.2426 24.0919L32.2635 36.1127L28.7279 39.6482L16.7071 27.6274L14.5858 25.5061Z"
        fill={color}
        fill-opacity="0.2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM14.5858 25.5061C13.8047 24.7251 13.8047 23.4587 14.5858 22.6777L16.7071 20.5564L28.7279 8.53554L32.2635 12.0711L20.2426 24.0919L32.2635 36.1127L28.7279 39.6482L16.7071 27.6274L14.5858 25.5061Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronCircleLeft;
