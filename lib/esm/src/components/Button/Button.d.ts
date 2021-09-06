/// <reference types="react" />
import "./Button.scss";
interface IButton {
    type?: "primary" | "secondary" | "outline";
    round?: boolean;
    fancy?: boolean;
    size?: "small" | "medium" | "large";
    backgroundColor?: string;
    children: string;
    className?: "string";
    onClick?: () => void;
}
declare const Button: ({ type, round, backgroundColor, fancy, size, children, className, onClick, }: IButton) => JSX.Element;
export default Button;
