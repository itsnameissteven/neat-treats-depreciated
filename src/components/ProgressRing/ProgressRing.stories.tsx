import React from "react";

import ProgressRing from "./ProgressRing";

export default {
  component: ProgressRing,
  title: "Components/ProgressRing",
  argTypes: {
    percentageComplete: {
      defaultValue: "20",
      required: true,
      type: "number",
    },
    size: {
      defaultValue: "70",
      type: "number",
    },
    stroke: {
      defaultValue: "3",
      type: "number",
    },
    hasPercentageDisplay: {
      default: "true",
      type: "boolean",
    },
    border: {
      default: "#ade8f4",
      type: "string",
    },
    completeBorder: {
      default: "#0077b6",
      type: "string",
    },
  },
  decorators: [(Story) => <Story />],
};

const Template = ({
  percentageComplete,
  size,
  stroke,
  hasPercentageDisplay,
  border,
  completeBorder,
}) => {
  return (
    <ProgressRing
      size={size}
      percentageComplete={percentageComplete}
      stroke={stroke}
      hasPercentageDisplay={hasPercentageDisplay}
      border={border}
      completeBorder={completeBorder}
    />
  );
};

export const Primary = Template.bind({});
