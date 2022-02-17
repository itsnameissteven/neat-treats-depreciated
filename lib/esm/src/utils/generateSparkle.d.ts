declare const generateSparkle: (color: string) => {
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
