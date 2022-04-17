/// <reference types="react" />
interface IActionButton {
    size?: number;
    stroke?: number;
    onClick?: () => void;
    border?: string;
    activeBorder?: string;
    animationDirection?: "up" | "down" | "left" | "right";
    iconName?: string;
    className?: string;
    children?: JSX.Element | string;
}
declare const ActionButton: ({ size, stroke, border, activeBorder, animationDirection, children, iconName, className, onClick, }: IActionButton) => JSX.Element;
export default ActionButton;
