/// <reference types="react" />
import "./MasonryGrid.scss";
interface IMasonryGrid {
    children: JSX.Element[];
}
declare const MasonryGrid: ({ children }: IMasonryGrid) => JSX.Element;
export default MasonryGrid;
