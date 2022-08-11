import React from "react";
import classNames from "classnames";
import { useBodyLock } from "../../hooks";

interface IMenu {
  isOpen: boolean;
  children: any;
  width?: string;
  handleClose: () => void;
  position?: "left" | "right";
  heightFromTop?: string;
  backgroundColor?: string;
  boxShadow?: string;
  style?: object;
  containerColor?: string;
  className?: string;
}

const Menu = ({
  isOpen,
  children,
  handleClose,
  width = "225px",
  position = "left",
  heightFromTop = "50px",
  backgroundColor = "#fff",
  boxShadow,
  style = {},
  containerColor = "#0505051c",
  className = "",
}: IMenu) => {
  useBodyLock(isOpen);
  const styles = {
    width,
    top: heightFromTop,
    backgroundColor,
    boxShadow,
    height: `calc(100vh - ${heightFromTop})`,
  };

  const containerClassName = classNames({
    menu: true,
    "menu-container-enter": isOpen,
    "menu-container-exit": !isOpen,
  });

  const slideOutClassName = classNames({
    [`menu__slide-out--${position}`]: true,
    [`menu__slide-out-enter--${position}`]: isOpen,
    [`menu__slide-out-exit--${position}`]: !isOpen,
  });

  return (
    <div
      className={`${containerClassName} ${className}`}
      style={{
        backgroundColor: containerColor,
      }}
      onClick={handleClose}
    >
      <div className={slideOutClassName} style={{ ...styles, ...style }}>
        {children}
      </div>
    </div>
  );
};

export default Menu;
