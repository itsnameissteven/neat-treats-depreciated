/// <reference types="react" />
interface IDarkModeButton {
    /** Optional className to pass to the top element*/
    className?: string;
    /** For additional functionality pass an onClick event */
    onClick?: () => void;
    /** Dark mode off icon jsx element */
    offIcon?: JSX.Element;
    /** Dark mode on icon jsx element */
    onIcon?: JSX.Element;
    /** Size of the button */
    size?: number;
}
declare const DarkModeButton: ({ className, onClick, offIcon, onIcon, size, }: IDarkModeButton) => JSX.Element;
export default DarkModeButton;
