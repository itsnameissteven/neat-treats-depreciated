import React from "react";

import Hamburger from ".";

export default {
  component: Hamburger,
  title: "Components/Hamburger",
  argTypes: {
    isClicked: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

export const Primary = ({ isClicked }) => <Hamburger isClicked={isClicked} />;
