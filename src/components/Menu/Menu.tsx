import React, { useState, useEffect } from "react";
import classNames from "classnames";

import "./Menu.scss";

interface IMenu {
  isOpen: boolean;
  children: any;
}

const Menu = ({ isOpen, children }: IMenu) => {
  const [canOpen, setCanOpen] = useState(isOpen);

  const containerClassName = classNames({
    menu: true,
    ["menu-container-enter"]: isOpen,
    ["menu-container-exit"]: !isOpen,
  });

  const slideOutClassName = classNames({
    ["menu__slide-out"]: true,
    ["menu__slide-out-enter"]: isOpen,
    ["menu__slide-out-exit"]: !isOpen,
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
      <div className={slideOutClassName}>{children}</div>
    </div>
  );
};

export default Menu;
