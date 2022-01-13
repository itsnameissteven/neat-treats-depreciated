import React from "react";

import ActionButton from "./ActionButton";

export default {
  component: ActionButton,
  title: "Components/ActionButton",
  argTypes: {
    animationDirection: {
      options: [undefined, "up", "down", "left", "right"],
      control: { type: "radio" },
      defaultValue: undefined,
    },
  },
  decorators: [(Story) => <Story />],
};

const Template = ({ iconName, animationDirection, stroke, size }) => {
  return (
    <>
      <h1 className="story__h1">ActionButton</h1>
      <p className="story__p">
        The ActionButton allows you to pass in a custom icon or pick from the
        available icon library. Icon animation will be omitted if no
        animationDirection is indicated.
      </p>
      <div className="story__action-btn">
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
        <ActionButton
          iconName={iconName || "x"}
          onClick={() => null}
          stroke={stroke}
          size={size}
          animationDirection={animationDirection || null}
        />
      </div>
    </>
  );
};

export const Primary = Template.bind({});
