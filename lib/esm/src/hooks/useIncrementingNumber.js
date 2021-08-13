import { useEffect, useRef, useState } from "react";
var useIncrementingNumber = function (delay) {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    var savedCallback = useRef(function () { return setCount(function (c) { return c + 1; }); });
    useEffect(function () {
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
module.exports = useIncrementingNumber;
