/// <reference types="react" />
import "./Hamburger.scss";
interface IHamburger {
    size?: string;
    className?: string;
    handleClick: () => void;
    isActive: boolean;
    pipes?: 2 | 3;
    animationTime?: string;
    color?: string;
    zIndex?: number;
    position?: {
        top: string;
        left: string;
        right: string;
    };
}
declare const Hamburger: ({ size, className, handleClick, isActive, pipes, animationTime, color, zIndex, position, }: IHamburger) => JSX.Element;
export default Hamburger;
