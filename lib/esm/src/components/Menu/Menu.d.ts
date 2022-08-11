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
    className?: string;
}
declare const Menu: ({ isOpen, children, handleClose, width, position, heightFromTop, backgroundColor, boxShadow, style, containerColor, className, }: IMenu) => JSX.Element;
export default Menu;
