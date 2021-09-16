import React from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "../../icons";

const icons = {
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-down": ChevronDown,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon = ({ name, size, className }: IconProps) => {
  if (typeof icons[name] !== "undefined") {
    return React.createElement(icons[name], { size, className });
  }
  return null;
};

export default Icon;
