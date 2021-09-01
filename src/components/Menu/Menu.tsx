import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "./Menu.scss";

interface IMenu {
  isOpen: boolean;
  children: any;
  width?: string;
  position?: "left" | "right";
  heightFromTop?: string;
}

const Menu = ({
  isOpen,
  children,
  width = "225px",
  position = "left",
  heightFromTop = "50px",
}: IMenu) => {
  const [canOpen, setCanOpen] = useState(isOpen);

  const styles = {
    width,
    top: heightFromTop,
  };

  const containerClassName = classNames({
    menu: true,
    ["menu-container-enter"]: isOpen,
    ["menu-container-exit"]: !isOpen,
  });

  const slideOutClassName = classNames({
    [`menu__slide-out--${position}`]: true,
    [`menu__slide-out-enter--${position}`]: isOpen,
    [`menu__slide-out-exit--${position}`]: !isOpen,
  });

  useEffect(() => {
    const delayOpen = setTimeout(() => {
      setCanOpen(isOpen);
    }, 2000);

    if (isOpen) {
      setCanOpen(isOpen);
    }

    return () => clearTimeout(delayOpen);
  }, [isOpen]);

  if (!canOpen) {
    return null;
  }

  return (
    <div className={containerClassName}>
      <div className={slideOutClassName} style={styles}>
        {children}
      </div>
    </div>
  );
};

export default Menu;
