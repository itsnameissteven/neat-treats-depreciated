"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var usePreventAnimation = function (timeout) {
    if (timeout === void 0) { timeout = 500; }
    var _a = (0, react_1.useState)(false), isLoaded = _a[0], setIsLoaded = _a[1];
    (0, react_1.useEffect)(function () {
        setTimeout(function () { return setIsLoaded(true); }, timeout);
    }, []);
    return {
        isLoaded: isLoaded,
        noAnimation: !isLoaded ? "no-animation" : "",
        noTransition: !isLoaded ? "no-transition" : "",
    };
};
exports.default = usePreventAnimation;
