import React from "react";

import ActionButton from "./ActionButton";
import { Icon } from "..";

export default {
  component: ActionButton,
  title: "Components/ActionButton",
  argTypes: {},
  decorators: [(Story) => <Story />],
};

export const Primary = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px",
          lineHeight: "1.3",
        }}
      >
        The ActionButton allows you to pass in a custom icon or pick from the
        available icon library. Icon animation will be omitted if no
        animationDirection is indicated
      </p>
      <ActionButton
        animationDirection="right"
        iconName="arrow-right"
        onClick={() => null}
      />
      <ActionButton
        animationDirection="left"
        iconName="arrow-left"
        onClick={() => null}
      />
      <ActionButton
        animationDirection="up"
        iconName="arrow-up"
        onClick={() => null}
      />
      <ActionButton
        animationDirection="down"
        iconName="arrow-down"
        onClick={() => null}
      />
    </div>
  );
};
