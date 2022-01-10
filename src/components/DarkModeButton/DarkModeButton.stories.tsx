import React, { useState } from "react";

import DarkModeButton from "./DarkModeButton";
import './story.styles.scss'

export default {
  component: DarkModeButton,
  title: "Components/DarkModeButton",
  argTypes: {},
  decorators: [(Story) => <Story />],
};

export const Primary = () => {

  return (
    <div className='dark-mode-story'>
      <DarkModeButton />
    </div>
  );
};
