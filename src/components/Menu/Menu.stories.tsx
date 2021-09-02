import React, { useState } from "react";

import Menu from "./Menu";
import Hamburger from "../Hamburger";

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

  return (
    <Menu isOpen={isOpenTest} position={position} setClose={setIsOpenTest}>
      <p style={{ margin: "unset" }}>I am a child</p>
    </Menu>
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
      />
      <Menu isOpen={isOpen} setClose={setIsOpen}>
        <p style={{ margin: "unset" }}>I am a child</p>
      </Menu>
    </div>
  );
};
