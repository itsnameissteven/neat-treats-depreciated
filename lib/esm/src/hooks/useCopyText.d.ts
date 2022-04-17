interface IArgs {
    /** Amount of time to display the copy message */
    transitionDuration?: number;
    /** Styles to add the message*/
    styles?: {};
    /** className to pass to the message */
    className?: string;
}
declare const useCopyText: ({ transitionDuration, styles, className, }: IArgs) => {
    copyText: (text: string) => void;
    isCopied: boolean;
    showMessage: () => JSX.Element;
};
export default useCopyText;
