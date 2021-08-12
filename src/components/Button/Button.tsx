import React from "react";
import classnames from "classnames";

import "./Button.scss";

interface IButton {
  type?: "primary" | "secondary" | "outline";
  round?: boolean;
  backgroundColor?: string;
  children: string; //or any? or icon?
  className?: "string";
  onClick?: () => void;
}

const Button = ({
  type = "primary",
  round = false,
  backgroundColor,
  children,
  className,
  onClick,
}: IButton) => {
  const btnClass = classnames({
    "nt-btn": true,
    [`btn-${type}`]: true,
    round: round,
  });

  const style =
    type === "outline"
      ? { color: backgroundColor, borderColor: backgroundColor }
      : { backgroundColor };

  return (
    <button
      className={`${btnClass} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
