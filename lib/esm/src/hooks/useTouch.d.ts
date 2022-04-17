import { TouchEvent } from "react";
declare const useTouch: () => {
    startPosition: number;
    setStartPosition: import("react").Dispatch<import("react").SetStateAction<number>>;
    endPosition: number;
    setEndPosition: import("react").Dispatch<import("react").SetStateAction<number>>;
    swipeDistance: number;
    setSwipeDistance: import("react").Dispatch<import("react").SetStateAction<number>>;
    isSwipeActive: boolean;
    setIsSwipeActive: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    onSwipeStart: (e: TouchEvent<any>) => void;
    onSwipeEnd: () => void;
    onSwipeMove: (e: TouchEvent<any>) => void;
};
export default useTouch;
