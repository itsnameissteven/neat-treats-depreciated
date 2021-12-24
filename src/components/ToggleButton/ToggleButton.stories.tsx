import React, { useState } from "react";

import ToggleButton from "./ToggleButton";

export default {
  component: ToggleButton,
  title: "Components/ToggleButton",
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
      <ToggleButton handleOn={handleOn} />
    </div>
  );
};
