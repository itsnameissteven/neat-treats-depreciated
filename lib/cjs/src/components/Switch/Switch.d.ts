interface ISwitch {
    className?: string;
    height?: number;
    background?: string;
    ballColor?: string;
    onClick?: () => void;
}
declare const Switch: ({ className, height, background, ballColor, onClick, }: ISwitch) => JSX.Element;
export default Switch;
