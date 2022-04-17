interface IArgs {
    color: string;
    minSize?: number;
    maxSize?: number;
}
declare const generateSparkle: ({ color, minSize, maxSize }: IArgs) => {
    id: string;
    createdAt: number;
    color: string;
    size: number;
    style: {
        top: string;
        left: string;
    };
};
export default generateSparkle;
