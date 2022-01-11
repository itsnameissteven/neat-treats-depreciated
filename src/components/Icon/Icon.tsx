import React from "react";
import classNames from "classnames";

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
