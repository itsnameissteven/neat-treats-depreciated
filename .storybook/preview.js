import "./styles.scss";
import "../src/styles/index.scss";
import React from "react";
import myTheme from "./theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: {
    theme: myTheme,
  },
};

export const decorators = [
  (Story) => (
    <div className="story" style={{ color: "#fff" }}>
      <Story />
    </div>
  ),
];
