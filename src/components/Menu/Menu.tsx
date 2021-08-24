import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Menu.scss";

interface IMenu {
  isOpen: boolean;
}

const Menu = ({ isOpen }: IMenu) => {
  console.log(isOpen);
  return (
    <CSSTransition
      in={isOpen}
      timeout={400}
      classNames="menu-transition"
      unmountOnExit
      mountOnEnter
    >
      <div className="menu">
        <div className="menu__slide-out"></div>
      </div>
    </CSSTransition>
  );
};

export default Menu;
