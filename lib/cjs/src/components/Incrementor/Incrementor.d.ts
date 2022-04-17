interface IIncrementor {
    maxCount?: number;
    minCount?: number;
    currentCount: number;
    width?: string;
    onSubtract: () => void;
    onAdd: () => void;
}
declare const Incrementor: ({ maxCount, minCount, width, currentCount, onSubtract, onAdd, }: IIncrementor) => JSX.Element;
export default Incrementor;
