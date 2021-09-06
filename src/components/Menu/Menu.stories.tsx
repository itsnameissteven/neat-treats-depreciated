import React, { useState } from "react";

import Menu from "./Menu";
import Hamburger from "../Hamburger";
import { useEffect } from "react";

export default {
  component: Menu,
  title: "Components/Menu",
  argTypes: {
    isOpen: { options: [true, false] },
    position: { options: ["left", "right"] },
  },
  decorators: [(Story) => <Story />],
};

export const Primary = ({ isOpen, position }) => {
  const [isOpenTest, setIsOpenTest] = useState(isOpen);

  useEffect(() => {
    setIsOpenTest(isOpen);
  }, [isOpen]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Menu
        isOpen={isOpenTest}
        position={position}
        handleClose={() => setIsOpenTest(false)}
      >
        <p style={{ margin: "unset" }}>I am a child</p>
      </Menu>
    </div>
  );
};

export const WithBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Hamburger
        handleClick={() => setIsOpen(!isOpen)}
        isActive={isOpen}
        size="25px"
        animationTime="300ms"
      />
      <Menu isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <p style={{ margin: "unset" }}>I am a child</p>
      </Menu>
    </div>
  );
};
