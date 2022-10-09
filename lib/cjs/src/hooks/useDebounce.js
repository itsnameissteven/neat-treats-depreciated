"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDebounce = function (value, delay) {
    if (delay === void 0) { delay = 500; }
    var _a = (0, react_1.useState)(value), deboucedValue = _a[0], setDebouncedValue = _a[1];
    (0, react_1.useEffect)(function () {
        var handler = setTimeout(function () { return setDebouncedValue(value); }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return deboucedValue;
};
exports.default = useDebounce;
