import { useEffect, useState } from "react";
var QUERY = "(prefers-reduced-motion: no-preference)";
var isRenderingOnServer = typeof window === "undefined";
var getInitialState = function () {
    return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};
var usePrefersReducedMotion = function () {
    var _a = useState(getInitialState), prefersReducedMotion = _a[0], setPrefersReducedMotion = _a[1];
    useEffect(function () {
        var mediaQueryList = window.matchMedia(QUERY);
        var listener = function (event) {
            setPrefersReducedMotion(!event.matches);
        };
        mediaQueryList.addListener(listener);
        return function () {
            mediaQueryList.removeListener(listener);
        };
    }, []);
    return prefersReducedMotion;
};
export default usePrefersReducedMotion;
