import React from "react";

import Switch from "./Switch";

export default {
  component: Switch,
  title: "Components/Switch",
  argTypes: {},
  decorators: [(Story) => <Story />],
};

export const Primary = () => {
  return <Switch />;
};
