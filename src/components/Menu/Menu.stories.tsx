import React from "react";

import Menu from "./Menu";

export default {
  component: Menu,
  title: "Components/Menu",
  argTypes: {
    isOpen: { options: [true, false] },
  },
  decorators: [(Story) => <Story />],
};

const Template = ({ isOpen }) => (
  <Menu isOpen={isOpen}>
    <p style={{ margin: "unset" }}>I am a child</p>
  </Menu>
);

export const Primary = Template.bind({});
// Primary.args = {
//   isOpen: true,
// };
