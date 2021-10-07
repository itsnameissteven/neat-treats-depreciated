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
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  ArrowCircleUp,
  ArrowCircleRight,
  ArrowCircleDown,
  ArrowCircleLeft,
  ArrowCircleUpF,
  ArrowCircleRightF,
  ArrowCircleDownF,
  ArrowCircleLeftF,
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
  "arrow-up": ArrowUp,
  "arrow-right": ArrowRight,
  "arrow-down": ArrowDown,
  "arrow-left": ArrowLeft,
  "arrow-circle-up": ArrowCircleUp,
  "arrow-circle-right": ArrowCircleRight,
  "arrow-circle-down": ArrowCircleDown,
  "arrow-circle-left": ArrowCircleLeft,
  "arrow-circle-up-f": ArrowCircleUpF,
  "arrow-circle-right-f": ArrowCircleRightF,
  "arrow-circle-down-f": ArrowCircleDownF,
  "arrow-circle-left-f": ArrowCircleLeftF,
};

export const iconKeys = Object.keys(icons);

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ name, size, color, className, onClick }: IconProps) => {
  if (!icons[name]) {
    return null;
  }
  const CreatedItem = () => {
    return React.createElement(icons[name], {
      size,
      color,
      className,
    });
  };
  if (onClick) {
    return (
      <button onClick={onClick}>
        <CreatedItem />
      </button>
    );
  }
  return <CreatedItem />;
};

export default Icon;
