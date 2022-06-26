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
    isActive: boolean;
}
declare const Hamburger: ({ size, className, onClick, pipes, animationTime, color, zIndex, position, isActive, }: IHamburger) => JSX.Element;
export default Hamburger;
