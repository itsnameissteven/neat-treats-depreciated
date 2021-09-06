/// <reference types="react" />
import "./Menu.scss";
interface IMenu {
    isOpen: boolean;
    children: any;
    width?: string;
    handleClose: () => void;
    position?: "left" | "right";
    heightFromTop?: string;
    backgroundColor?: string;
    boxShadow?: string;
    style?: object;
    containerColor?: string;
}
declare const Menu: ({ isOpen, children, handleClose, width, position, heightFromTop, backgroundColor, boxShadow, style, containerColor, }: IMenu) => JSX.Element | null;
export default Menu;
