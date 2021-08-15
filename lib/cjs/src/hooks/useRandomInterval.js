"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var random_1 = __importDefault(require("../utils/random"));
var useRandomInterval = function (callback, minDelay, maxDelay) {
    var timeoutId = react_1.useRef(null);
    var savedCallBack = react_1.useRef(callback);
    react_1.useEffect(function () {
        savedCallBack.current = callback;
    });
    react_1.useEffect(function () {
        var isEnabled = typeof minDelay === "number" && typeof maxDelay === "number";
        if (isEnabled) {
            var handleTick_1 = function () {
                var nextTickAt = random_1.default(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(function () {
                    savedCallBack.current();
                    handleTick_1();
                }, nextTickAt);
            };
            handleTick_1();
        }
        return function () { return window.clearTimeout(timeoutId.current); };
    }, [minDelay, maxDelay]);
    var cancel = react_1.useCallback(function () {
        window.clearTimeout(timeoutId.current);
    }, []);
    return cancel;
};
exports.default = useRandomInterval;
