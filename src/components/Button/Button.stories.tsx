import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    type: {
      options: ["primary", "secondary", "outline"],
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

export const Primary = ({ type, round, label, backgroundColor }) => (
  <Button type={type} round={round} backgroundColor={backgroundColor}>
    {label}
  </Button>
);
