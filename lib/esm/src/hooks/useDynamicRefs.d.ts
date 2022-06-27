interface IObject {
    [key: string]: any;
}
declare const useDynamicRefs: () => {
    refs: import("react").MutableRefObject<IObject>;
    setRef: (element: any, key: string) => void;
    scrollToRef: (key: string, options?: IObject) => void;
    scrollToTop: (key: string, options?: IObject) => void;
};
export default useDynamicRefs;
