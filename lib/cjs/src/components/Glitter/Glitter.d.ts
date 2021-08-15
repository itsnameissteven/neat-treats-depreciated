/// <reference types="react" />
interface IGlitter {
    color?: string;
    rainbow?: boolean;
    children: JSX.Element;
    delegated?: {
        [x: string]: any;
    };
}
declare const Glitter: ({ color, rainbow, children, ...delegated }: IGlitter) => JSX.Element;
export default Glitter;
