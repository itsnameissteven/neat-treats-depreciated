import { useState, useEffect } from "react";
var usePreventAnimation = function (timeout) {
    if (timeout === void 0) { timeout = 500; }
    var _a = useState(false), isLoaded = _a[0], setIsLoaded = _a[1];
    useEffect(function () {
        setTimeout(function () { return setIsLoaded(true); }, timeout);
    }, []);
    return {
        isLoaded: isLoaded,
        noAnimation: !isLoaded ? "no-animation" : "",
        noTransition: !isLoaded ? "no-transition" : "",
    };
};
export default usePreventAnimation;
