import React from "react";

import Switch from "./Switch";

export default {
  component: Switch,
  title: "Components/Switch",
  argTypes: {
    ballColor: {
      control: { type: "color" },
      defaultValue: "#fff",
    },
    background: {
      control: { type: "color" },
      defaultValue: "#000",
    },
    height: {
      controls: { type: "number" },
      defaultValue: 20,
    },
  },
  decorators: [(Story) => <Story />],
};

const Template = (args) => {
  return <Switch {...args} />;
};

export const Primary = Template.bind({});
