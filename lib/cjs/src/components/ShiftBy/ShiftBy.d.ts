/// <reference types="react" />
interface IShiftByProps {
    x?: number;
    y?: number;
    children: JSX.Element[] | JSX.Element;
}
declare const ShiftBy: ({ x, y, children, ...rest }: IShiftByProps) => JSX.Element;
export default ShiftBy;
