import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronCircleUp,
  ChevronCircleDown,
  ChevronCircleLeft,
  ChevronCircleRight,
  ChevronCircleUpF,
  ChevronCircleDownF,
  ChevronCircleLeftF,
  ChevronCircleRightF,
  Plus,
  PlusCircle,
  PlusCircleF,
  X,
  XCircle,
  XCircleF,
  HamburgerRound,
  HamburgerSquare,
  HamburgerShort,
} from "../../icons";

const icons = {
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
  "chevron-circle-up": ChevronCircleUp,
  "chevron-circle-down": ChevronCircleDown,
  "chevron-circle-left": ChevronCircleLeft,
  "chevron-circle-right": ChevronCircleRight,
  "chevron-circle-up-f": ChevronCircleUpF,
  "chevron-circle-down-f": ChevronCircleDownF,
  "chevron-circle-left-f": ChevronCircleLeftF,
  "chevron-circle-right-f": ChevronCircleRightF,
  plus: Plus,
  "plus-circle": PlusCircle,
  "plus-circle-f": PlusCircleF,
  x: X,
  "x-circle": XCircle,
  "x-circle-f": XCircleF,
  "hamburger-round": HamburgerRound,
  "hamburger-square": HamburgerSquare,
  "hamburger-short": HamburgerShort,
};

export const iconKeys = Object.keys(icons);

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
