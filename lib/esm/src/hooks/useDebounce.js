import { useState, useEffect } from 'react';
var useDebounce = function (value, delay) {
    if (delay === void 0) { delay = 500; }
    var _a = useState(value), deboucedValue = _a[0], setDebouncedValue = _a[1];
    useEffect(function () {
        var handler = setTimeout(function () { return setDebouncedValue(value); }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return deboucedValue;
};
export default useDebounce;
