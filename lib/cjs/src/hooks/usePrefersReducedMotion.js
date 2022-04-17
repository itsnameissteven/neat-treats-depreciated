"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var QUERY = "(prefers-reduced-motion: no-preference)";
var isRenderingOnServer = typeof window === "undefined";
var getInitialState = function () {
    return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};
var usePrefersReducedMotion = function () {
    var _a = (0, react_1.useState)(getInitialState), prefersReducedMotion = _a[0], setPrefersReducedMotion = _a[1];
    (0, react_1.useEffect)(function () {
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
exports.default = usePrefersReducedMotion;
