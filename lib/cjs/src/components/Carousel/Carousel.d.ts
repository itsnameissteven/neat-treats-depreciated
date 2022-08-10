/// <reference types="react" />
interface ICarousel {
    transitionTime?: number;
    children: JSX.Element | JSX.Element[];
    iconColor?: string;
    hoverIconColor?: string;
    iconSize?: number;
    iconPrev?: string;
    iconNext?: string;
    className?: string;
    width?: string;
}
declare const Carousel: ({ transitionTime, iconColor, iconSize, children, iconPrev, iconNext, className, }: ICarousel) => JSX.Element;
export default Carousel;
