import React, { useState } from "react";

import Icon from ".";
import { iconKeys } from "./Icon";

export default {
  component: Icon,
  title: "Components/Icon",
  argTypes: {},
};

const allIcons = iconKeys.map((name, i) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      key={i}
    >
      <p className="icon__name">{name}</p>
      <Icon name={name} />
    </div>
  );
});

export const Primary = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 200px)",
      rowGap: "20px",
    }}
  >
    {allIcons}
  </div>
);
