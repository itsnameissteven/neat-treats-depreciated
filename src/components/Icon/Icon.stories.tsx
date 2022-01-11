import React, { useState } from "react";

import Icon from ".";

export default {
  component: Icon,
  title: "Components/Icon",
  argTypes: {},
};

const iconKeys = [
  "chevron-left",
  "chevron-right",
  "chevron-down",
  "chevron-up",
  "chevron-circle-up",
  "chevron-circle-down",
  "chevron-circle-left",
  "chevron-circle-right",
  "chevron-circle-up-f",
  "chevron-circle-down-f",
  "chevron-circle-left-f",
  "chevron-circle-right-f",
  "plus",
  "plus-circle",
  "plus-circle-f",
  "x",
  "x-circle",
  "x-circle-f",
  "hamburger-round",
  "hamburger-square",
  "hamburger-short",
  "arrow-up",
  "arrow-right",
  "arrow-down",
  "arrow-left",
  "arrow-circle-up",
  "arrow-circle-right",
  "arrow-circle-down",
  "arrow-circle-left",
  "arrow-circle-up-f",
  "arrow-circle-right-f",
  "arrow-circle-down-f",
  "arrow-circle-left-f",
  "moon",
  "sun",
  "copy",
];

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
      <p className="icon__name" style={{ marginBottom: "16px" }}>
        {name}
      </p>
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
