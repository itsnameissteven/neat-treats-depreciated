import React from "react";
import classNames from "classnames";

export const iconKeys = [
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
];

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Icon = ({
  name,
  size,
  color,
  className,
  onClick,
  disabled,
}: IconProps) => {
  // started logic for dynamic import

  let Component: any = null;
  const iconName = name
    .split("-")
    .map((string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    })
    .join("");
  try {
    Component = require(`../../icons/${iconName}.js`).default;
  } catch {
    try {
      Component = require(`../../icons/${iconName}.tsx`).default;
    } catch {
      console.log(`Icon ${name} does not exist.`);
    }
  }

  if (!Component) {
    return null;
  }

  const CreatedItem = ({ ...props }) => {
    return React.createElement(Component, {
      size,
      color,
      className,
      ...props,
    });
  };
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={classNames(className)}
        disabled={disabled}
      >
        <CreatedItem className={null} />
      </button>
    );
  }
  return <CreatedItem />;
};

export default Icon;
