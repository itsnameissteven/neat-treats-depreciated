import React from "react";
interface IPercentageBarProps {
    /** Size of the progress ring */
    height?: string;
    /** Initial border color */
    background?: string;
    /** Color of completed color */
    completedBorder?: string;
    /** Amount completed */
    percentageComplete: number;
    /** Optional classname to pass to parent element */
    className?: string;
    /** Style overrides */
    style?: React.CSSProperties;
}
declare const ProgressBar: ({ height, background, completedBorder, percentageComplete, className, style, }: IPercentageBarProps) => JSX.Element;
export default ProgressBar;
