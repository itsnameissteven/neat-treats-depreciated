import React from "react";
import classnames from "classnames";

import "./Button.scss";

interface IButton {
  type?: string;
  round?: boolean;
  children: string; //or any? or icon?
  onClick?: () => void;
}

const Button = ({
  type = "primary",
  round = false,
  children,
  onClick,
}: IButton) => {
  const btnClass = classnames({
    "nt-btn": true,
    [`btn-${type}`]: true,
    round: round,
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
