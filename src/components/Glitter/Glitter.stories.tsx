import React from "react";

import Glitter from "./Glitter";

export default {
  component: Glitter,
  title: "Components/Glitter",
  argTypes: {
    rainbow: {
      options: [true, false],
      control: { type: "radio" },
      defaultValue: false,
    },
  },
};

export const Text = ({ rainbow }) => (
  <div className="" style={{ border: "2px solid red" }}>
    <Glitter rainbow={rainbow}>
      <p>This is what it looks like when you glit</p>
    </Glitter>
  </div>
);
