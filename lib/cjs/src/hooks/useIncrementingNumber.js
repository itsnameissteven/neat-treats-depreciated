"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useIncrementingNumber = function (delay) {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var savedCallback = react_1.useRef(function () { return setCount(function (c) { return c + 1; }); });
    react_1.useEffect(function () {
        var tick = function () {
            savedCallback.current();
        };
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
        return;
    }, [delay]);
    return count;
};
exports.default = useIncrementingNumber;
