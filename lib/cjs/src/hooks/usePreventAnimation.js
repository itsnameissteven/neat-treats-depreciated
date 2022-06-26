"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var usePreventAnimation = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.timeout, timeout = _c === void 0 ? 500 : _c, _d = _b.secondaryBoolean, secondaryBoolean = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(false), isLoaded = _e[0], setIsLoaded = _e[1];
    (0, react_1.useEffect)(function () {
        setTimeout(function () { return setIsLoaded(true); }, timeout);
    }, [timeout]);
    return {
        isLoaded: isLoaded,
        noAnimation: !isLoaded || secondaryBoolean ? 'no-animation' : '',
        noTransition: !isLoaded || secondaryBoolean ? 'no-transition' : '',
    };
};
exports.default = usePreventAnimation;
