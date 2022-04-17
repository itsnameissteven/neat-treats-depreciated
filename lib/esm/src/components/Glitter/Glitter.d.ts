/// <reference types="react" />
interface IGlitter {
    color?: string;
    rainbow?: boolean;
    children: JSX.Element;
    minSize?: number;
    maxSize?: number;
    [x: string]: any;
}
declare const Glitter: ({ color, rainbow, children, minSize, maxSize, ...delegated }: IGlitter) => JSX.Element;
export default Glitter;
