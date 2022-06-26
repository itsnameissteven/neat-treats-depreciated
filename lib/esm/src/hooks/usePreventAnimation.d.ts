interface IPreventAnimation {
    timeout?: number;
    secondaryBoolean?: boolean;
}
declare const usePreventAnimation: ({ timeout, secondaryBoolean, }?: IPreventAnimation) => {
    isLoaded: boolean;
    noAnimation: string;
    noTransition: string;
};
export default usePreventAnimation;
