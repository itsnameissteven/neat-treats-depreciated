import React, { useState } from "react";

import Hamburger from ".";

export default {
  component: Hamburger,
  title: "Components/Hamburger",
  argTypes: {},
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Hamburger
        handleClick={() => setIsOpen(!isOpen)}
        isActive={isOpen}
        {...args}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  size: "100px",
  pipes: 2,
};
