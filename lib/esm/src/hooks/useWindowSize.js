import { useState, useEffect } from "react";
var useWindowSize = function () {
    var _a = useState({
        width: undefined,
        height: undefined,
    }), windowSize = _a[0], setWindowSize = _a[1];
    useEffect(function () {
        if (typeof window === "undefined") {
            return;
        }
        var handleResize = function () {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowSize;
};
export default useWindowSize;
