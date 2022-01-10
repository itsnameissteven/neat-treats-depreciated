import React, { useState } from "react";

import DarkModeButton from "./DarkModeButton";

export default {
  component: DarkModeButton,
  title: "Components/DarkModeButton",
  argTypes: {},
  decorators: [(Story) => <Story />],
};

export const Primary = () => {
  const [darkIsOn, setDarkIsOn] = useState(false);

  const onStyle = {
    padding: "200px",
    height: "100vh",
    width: "100%",
    background: "#1F2028",
    transition: "all .3s ease-out",
  };

  const offStyle = {
    padding: "200px",
    height: "100vh",
    width: "100%",
    background: "#fff",
    transition: "all .3s ease-out",
  };

  const handleOn = (isOn) => {
    setDarkIsOn(isOn);
  };

  return (
    <div style={darkIsOn ? onStyle : offStyle}>
      <DarkModeButton handleOn={handleOn} />
    </div>
  );
};
