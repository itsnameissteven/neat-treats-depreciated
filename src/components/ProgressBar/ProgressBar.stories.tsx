import React from "react";

import ProgressBar from "./ProgressBar";

export default {
  component: ProgressBar,
  title: "Components/ProgressBar",
  argTypes: {
    percentageComplete: {
      defaultValue: "20",
      required: true,
      type: "number",
    },
    height: {
      defaultValue: "5px",
      type: "string",
    },
    background: {
      default: "#ade8f4",
      type: "string",
    },
    completedBorder: {
      default: "#0077b6",
      type: "string",
    },
  },
  decorators: [(Story) => <Story />],
};

const Template = ({
  percentageComplete,
  height,
  background,
  completeBorder,
}) => {
  return (
    <ProgressBar
      height={height}
      percentageComplete={percentageComplete}
      background={background}
      completedBorder={completeBorder}
    />
  );
};

export const Primary = Template.bind({});
