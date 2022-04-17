/// <reference types="react" />
interface IMasonryGrid {
    children: JSX.Element[];
    minWidth?: number;
    maxWidth?: number;
}
declare const MasonryGrid: ({ children, minWidth, maxWidth, }: IMasonryGrid) => JSX.Element;
export default MasonryGrid;
