/// <reference types="react" />
interface ICarousel {
    transitionTime?: number;
    children: JSX.Element | JSX.Element[];
    iconColor?: string;
    iconSize?: number;
    iconPrev?: string;
    iconNext?: string;
}
declare const Carousel: ({ transitionTime, iconColor, iconSize, children, iconPrev, iconNext, }: ICarousel) => JSX.Element;
export default Carousel;
