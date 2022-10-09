interface IObject {
    [key: string]: any;
}
interface IScrollToArgs {
    key: string;
    options?: IObject;
}
declare const useDynamicRefs: () => {
    refs: import("react").MutableRefObject<IObject>;
    setRef: (element: string, key: string) => void;
    scrollToRef: ({ key, options, }: IScrollToArgs) => void;
    scrollToTop: ({ key, options, }: IScrollToArgs) => void;
};
export default useDynamicRefs;
