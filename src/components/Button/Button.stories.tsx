import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    round: {
      options: [true, false],
      control: { type: "radio" },
      defaultValue: false,
    },
    label: {
      required: true,
      control: { type: "text" },
      defaultValue: "Button",
    },
  },
};

export const Primary = ({ type, round, label }) => (
  <Button type={type} round={round}>
    {label}
  </Button>
);

export const Secondary = () => <Button>Secondary</Button>;

export const Round = () => <Button round={true}>Round</Button>;
