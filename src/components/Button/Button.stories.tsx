import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    type: {
      options: ["primary", "secondary", "outline", "inline"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    round: {
      options: [true, false],
      control: { type: "radio" },
      defaultValue: false,
    },
    fancy: {
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

export const Primary = ({
  type,
  round,
  fancy,
  label,
  backgroundColor,
  size,
}) => (
  <Button
    type={type}
    round={round}
    fancy={fancy}
    size={size}
    backgroundColor={backgroundColor}
  >
    {label}
  </Button>
);
