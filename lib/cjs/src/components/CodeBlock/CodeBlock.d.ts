interface ICodeBlock {
    /** Place your code inside template literals*/
    code: string;
    /** language of your code */
    language: string;
    /** Optional class name for the parent element */
    className?: string;
}
declare const CodeBlock: ({ className, code, language }: ICodeBlock) => JSX.Element;
export default CodeBlock;
