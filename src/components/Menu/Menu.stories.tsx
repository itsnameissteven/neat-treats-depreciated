import React from "react";

import Menu from "./Menu";

export default {
  component: Menu,
  title: "Components/Menu",
  argTypes: {
    isOpen: { options: [true, false] },
    position: { options: ["left", "right"] },
  },
  decorators: [(Story) => <Story />],
};

const Template = ({ isOpen, position }) => (
  <Menu isOpen={isOpen} position={position}>
    <p style={{ margin: "unset" }}>I am a child</p>
  </Menu>
);

export const Primary = Template.bind({});
// Primary.args = {
//   isOpen: true,
// };
