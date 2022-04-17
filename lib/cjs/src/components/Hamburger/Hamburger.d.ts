interface IHamburger {
    size?: string;
    className?: string;
    onClick: () => void;
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
declare const Hamburger: ({ size, className, onClick, pipes, animationTime, color, zIndex, position, }: IHamburger) => JSX.Element;
export default Hamburger;
