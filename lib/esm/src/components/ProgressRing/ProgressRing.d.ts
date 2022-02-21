interface IPercentageCircleProps {
    /** Size of the progress ring */
    size?: number;
    /** Thickness of Strock */
    stroke?: number;
    /** Initial border color */
    border?: string;
    /** Color of completed color */
    completedBorder?: string;
    /** Amount completed */
    percentageComplete: number;
    /** Optional classname to pass to parent element */
    className?: string;
    /** Toggle to display percentage compent */
    hasPercentageDisplay?: boolean;
}
declare const ProgressRing: ({ size, stroke, border, completedBorder, percentageComplete, className, hasPercentageDisplay, }: IPercentageCircleProps) => JSX.Element;
export default ProgressRing;
