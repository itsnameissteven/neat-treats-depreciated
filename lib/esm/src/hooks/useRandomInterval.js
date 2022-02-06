import { useEffect, useRef, useCallback } from "react";
import random from "../utils/random";
var useRandomInterval = function (callback, minDelay, maxDelay) {
    var timeoutId = useRef(null);
    var savedCallBack = useRef(callback);
    useEffect(function () {
        savedCallBack.current = callback;
    });
    useEffect(function () {
        var isEnabled = typeof minDelay === "number" && typeof maxDelay === "number";
        if (isEnabled) {
            var handleTick_1 = function () {
                var nextTickAt = random(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(function () {
                    savedCallBack.current();
                    handleTick_1();
                }, nextTickAt);
            };
            handleTick_1();
        }
        return function () { return window.clearTimeout(timeoutId.current); };
    }, [minDelay, maxDelay]);
    var cancel = useCallback(function () {
        window.clearTimeout(timeoutId.current);
    }, []);
    return cancel;
};
export default useRandomInterval;
