interface IStyle {
    top: string;
    left: string;
}
interface IGlitter {
    color: string;
    size: number;
    style: IStyle;
}
declare const GlitterInstance: ({ color, size, style }: IGlitter) => JSX.Element;
export default GlitterInstance;
