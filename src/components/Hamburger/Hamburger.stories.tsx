import React, { useState } from "react";

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

export const Primary = ({ size }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div onClick={() => setIsClicked(!isClicked)}>
      <Hamburger isClicked={isClicked} size={30} />
    </div>
  );
};
