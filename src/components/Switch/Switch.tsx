import React, { useState } from "react";
import classnames from "classnames";
import "./Switch.scss";

interface ISwitch {
  className?: string;
  height?: number;
  background?: string;
  ballColor?: string;
  onClick?: () => void;
}

const Switch = ({
  className = "",
  height = 25,
  background = "black",
  ballColor = "white",
  onClick,
}: ISwitch) => {
  const [on, setOn] = useState(false);
  const width = height * 2;
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    outline: `${height * 0.1}px solid ${background}`,
    background,
  };

  const ballClass = classnames("switch__ball", {
    "switch__ball--on": on,
    "switch__ball--off": !on,
  });

  const handleClick = () => {
    onClick && onClick();
    setOn(!on);
  };
  return (
    <button
      className={`switch ${className}`}
      onClick={handleClick}
      style={styles}
    >
      <span className={ballClass} style={{ backgroundColor: ballColor }} />
    </button>
  );
};

export default Switch;
