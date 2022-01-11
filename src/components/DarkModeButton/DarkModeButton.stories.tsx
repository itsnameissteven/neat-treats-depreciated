import React from "react";
import { CodeBlock } from "..";
import DarkModeButton from "./DarkModeButton";
import "./story.styles.scss";

export default {
  component: DarkModeButton,
  title: "Components/DarkModeButton",
  argTypes: {},
  decorators: [(Story) => <Story />],
};

const css = `.dark-mode-demo {
  padding: 20px;
  height: 100vh;
  width: 100%;
  background: #fff;
  transition: all 0.3s ease-out;
  color: #1f2028;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 20px 16px;
    border-bottom: 2px solid #ced1d4;
  }
}`;

export const Primary = () => {
  return (
    <div className="dark-mode-demo">
      <div className="dark-mode-demo__header">
        <h1>Dark Mode Button Demo</h1>
        <DarkModeButton />
      </div>
      <p>
        The Dark Mode button enables user to switch between light and dark
        modes. Clicking the button toggles the class name{" "}
        <strong>'dark-mode'</strong> on the <strong>body</strong> element.
        Developers can utilize this parent class to add styles specific to the
        dark view.
      </p>
      <CodeBlock code={css} language="css" />
    </div>
  );
};
