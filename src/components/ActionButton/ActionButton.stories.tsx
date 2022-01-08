import React, { useState } from "react";

import ActionButton from "./ActionButton";

export default {
  component: ActionButton,
  title: "Components/ActionButton",
  argTypes: {},
  decorators: [(Story) => <Story />],
};

export const Primary = () => {
  return (
    <div>
      <ActionButton />
    </div>
  );
};
