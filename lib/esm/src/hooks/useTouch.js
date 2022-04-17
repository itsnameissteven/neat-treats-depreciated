import { useState } from "react";
var useTouch = function () {
    var _a = useState(0), startPosition = _a[0], setStartPosition = _a[1];
    var _b = useState(0), endPosition = _b[0], setEndPosition = _b[1];
    var _c = useState(0), swipeDistance = _c[0], setSwipeDistance = _c[1];
    var _d = useState(false), isSwipeActive = _d[0], setIsSwipeActive = _d[1];
    var onSwipeStart = function (e) {
        setStartPosition(e.targetTouches[0].clientX);
    };
    var onSwipeMove = function (e) {
        setIsSwipeActive(true);
        setSwipeDistance(e.targetTouches[0].clientX - startPosition);
    };
    var onSwipeEnd = function () {
        setStartPosition(0);
        setSwipeDistance(0);
        setIsSwipeActive(false);
    };
    return {
        startPosition: startPosition,
        setStartPosition: setStartPosition,
        endPosition: endPosition,
        setEndPosition: setEndPosition,
        swipeDistance: swipeDistance,
        setSwipeDistance: setSwipeDistance,
        isSwipeActive: isSwipeActive,
        setIsSwipeActive: setIsSwipeActive,
        onSwipeStart: onSwipeStart,
        onSwipeEnd: onSwipeEnd,
        onSwipeMove: onSwipeMove,
    };
};
export default useTouch;
