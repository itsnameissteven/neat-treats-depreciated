import React from "react";

import "./Hamburger.scss";

const Hamburger = () => {
  return (
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="15" rx="8"></rect>
      <rect y="30" width="100" height="15" rx="8"></rect>
      <rect y="60" width="100" height="15" rx="8"></rect>
    </svg>
  );
};

export default Hamburger;
