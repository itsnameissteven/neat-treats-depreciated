/// <reference types="react" />
import "./Button.scss";
interface IButton {
    type?: "primary" | "secondary" | "outline";
    round?: boolean;
    backgroundColor?: string;
    children: string;
    className?: "string";
    onClick?: () => void;
}
declare const Button: ({ type, round, backgroundColor, children, className, onClick, }: IButton) => JSX.Element;
export default Button;
