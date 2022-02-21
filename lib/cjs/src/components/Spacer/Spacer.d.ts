import React from "react";
interface ISpacerProps {
    size: number;
    axis?: "vertical" | "horizontal";
    nonSquareSpace?: number;
    color?: string;
    style?: React.CSSProperties;
    isRounded?: boolean;
}
declare const Spacer: ({ size, axis, style, color, nonSquareSpace, isRounded, ...delegated }: ISpacerProps) => JSX.Element;
export default Spacer;
