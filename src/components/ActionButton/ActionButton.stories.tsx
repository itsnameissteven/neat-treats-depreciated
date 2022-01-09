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
    <div>
      <ActionButton
        size={75}
        stroke={4}
        animationDirection="right"
        onClick={() => null}
      >
        <Icon name="arrow-right" size={40} />
      </ActionButton>
    </div>
  );
};
