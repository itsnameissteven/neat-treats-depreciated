import '../../styles/_Loader.scss';
interface ILoaderProps {
    className?: string;
    /** Size of the progress ring */
    size?: number;
    /** Thickness of Strock */
    stroke?: number;
    /** Initial border color */
    border?: string;
    /** Color of completed color */
    completedBorder?: string;
}
declare const Loader: ({ className, size, border, completedBorder, stroke, }: ILoaderProps) => JSX.Element;
export default Loader;
