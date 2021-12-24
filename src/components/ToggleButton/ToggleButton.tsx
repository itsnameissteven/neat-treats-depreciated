import React, { useState, useEffect } from "react";
import { Icon } from "..";
import classNames from "classnames";

import "./ToggleButton.scss";

interface IToggleButton {
  /** Optional className to pass to the top element*/
  className?: string;
  /** Function to take in boolean value to trigger on click */
  handleOn: (string: boolean) => void;
  /** Off icon jsx element */
  offIcon?: JSX.Element;
  /** On icon jsx element */
  onIcon?: JSX.Element;
}

const ToggleButton = ({
  className = "",
  handleOn,
  offIcon,
  onIcon,
}: IToggleButton) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    handleOn(isOn);
  }, [isOn]);

  const toggleClass = classNames(className, "toggle-button", {
    ["toggle-button--white"]: isOn,
  });

  const iconClassOn = classNames("toggle-button__icon", {
    "toggle-button__icon--left": !isOn,
  });

  const iconClassOff = classNames("toggle-button__icon", {
    "toggle-button__icon--right": isOn,
  });

  return (
    <button className={toggleClass} onClick={() => setIsOn(!isOn)}>
      <span className={iconClassOff}>
        {offIcon || <Icon name={"sun"} size={40} color="#1F2028" />}
      </span>
      <span className={iconClassOn}>
        {onIcon || <Icon name={"moon"} size={40} color="#fff" />}
      </span>
    </button>
  );
};

export default ToggleButton;
