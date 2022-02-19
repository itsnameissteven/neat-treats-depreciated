import React from "react";
import classnames from "classnames";

interface IButton {
  type?: "primary" | "secondary" | "outline";
  round?: boolean;
  fancy?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  children: string;
  className?: "string";
  onClick?: () => void;
}

const Button = ({
  type = "primary",
  round = false,
  backgroundColor,
  fancy = false,
  size = "medium",
  children,
  className,
  onClick,
}: IButton) => {
  const btnClass = classnames({
    "nt-btn": true,
    [`nt-btn__${type}`]: true,
    [`nt-btn__${size}`]: true,
    round: round,
    fancy: fancy && type !== "outline" && !round,
    "fancy-round": fancy && type !== "outline" && round,
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
