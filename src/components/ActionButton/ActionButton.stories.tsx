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
    <>
      <h1 style={{ margin: "24px 0" }}>ActionButton</h1>
      <p
        style={{
          width: "75%",
          marginBottom: "24px",
          fontSize: "16px",
          lineHeight: "1.3",
        }}
      >
        The ActionButton allows you to pass in a custom icon or pick from the
        available icon library. Icon animation will be omitted if no
        animationDirection is indicated.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          height: "200px",
          borderRadius: "4px",
          padding: "30px",
        }}
      >
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
        <ActionButton iconName="x" onClick={() => null} />
      </div>
    </>
  );
};
