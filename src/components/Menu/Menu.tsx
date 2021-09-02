import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "./Menu.scss";

interface IMenu {
  isOpen: boolean;
  children: any;
  width?: string;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  position?: "left" | "right";
  heightFromTop?: string;
  backgroundColor?: string;
  boxShadow?: string;
  style?: object;
  containerColor?: string;
}

const Menu = ({
  isOpen,
  children,
  setClose,
  width = "225px",
  position = "left",
  heightFromTop = "50px",
  backgroundColor = "#fff",
  boxShadow,
  style,
  containerColor = "#0505051c",
}: IMenu) => {
  const [canOpen, setCanOpen] = useState(isOpen);

  const styles = {
    width,
    top: heightFromTop,
    backgroundColor,
    boxShadow,
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
    }, 400);

    if (isOpen) {
      setCanOpen(isOpen);
    }

    return () => clearTimeout(delayOpen);
  }, [isOpen]);

  if (!canOpen) {
    return null;
  }

  return (
    <div
      className={containerClassName}
      style={{
        backgroundColor: containerColor,
      }}
      onClick={() => setClose(false)}
    >
      <div className={slideOutClassName} style={style ? style : styles}>
        {children}
      </div>
    </div>
  );
};

export default Menu;
