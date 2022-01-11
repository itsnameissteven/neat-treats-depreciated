import React, { useState, useEffect } from "react";
import { Icon } from "..";

import "./DarkModeButton.scss";

interface IDarkModeButton {
  /** Optional className to pass to the top element*/
  className?: string;
  /** For additional functionality pass an onClick event */
  onClick?: () => void;
  /** Off icon jsx element */
  offIcon?: JSX.Element;
  /** On icon jsx element */
  onIcon?: JSX.Element;
  /** Size of the button */
  size?: number;
}

const DarkModeButton = ({
  className = "",
  onClick,
  offIcon,
  onIcon,
  size = 50,
}: IDarkModeButton) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isOn]);

  const handleClick = () => {
    setIsOn(!isOn);
    onClick && onClick();
  };

  const iconSize = size * 0.66;

  return (
    <button
      className={`dark-mode-button ${className}`}
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <span className="dark-mode-button__icon--light">
        {offIcon || <Icon name={"sun"} size={iconSize} color="#1F2028" />}
      </span>
      <span className="dark-mode-button__icon--dark">
        {onIcon || <Icon name={"moon"} size={iconSize} color="#fff" />}
      </span>
    </button>
  );
};

export default DarkModeButton;
