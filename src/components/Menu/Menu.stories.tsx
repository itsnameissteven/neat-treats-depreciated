import React from "react";

import Menu from "./Menu";

export default {
  component: Menu,
  title: "Components/Menu",
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//   isOpen: true,
// };
