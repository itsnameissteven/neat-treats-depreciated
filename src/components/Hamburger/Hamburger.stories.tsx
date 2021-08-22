import React from "react";

import Hamburger from ".";

export default {
  component: Hamburger,
  title: "Components/Hamburger",
  argTypes: {},
};

const Template = (args) => <Hamburger {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "20px",
};
