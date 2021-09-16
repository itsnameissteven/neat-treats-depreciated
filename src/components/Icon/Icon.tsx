import React from "react";
import { ChevronLeft } from "../../icons";

const icons = {
  "chevron-left": ChevronLeft,
};

interface IconProps {
  name: string;
  size?: number;
}

const Icon = ({ name, size }: IconProps) => {
  if (typeof icons[name] !== "undefined") {
    return React.createElement(icons[name], { size });
  }
  return null;
};

export default Icon;
