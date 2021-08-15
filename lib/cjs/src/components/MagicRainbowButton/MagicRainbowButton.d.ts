/// <reference types="react" />
interface IMagicRainbowButton {
    children?: any;
    intervalDelay?: number;
    delegated?: {
        [x: string]: any;
    };
}
declare const MagicRainbowButton: ({ children, intervalDelay, ...delegated }: IMagicRainbowButton) => JSX.Element;
export default MagicRainbowButton;
