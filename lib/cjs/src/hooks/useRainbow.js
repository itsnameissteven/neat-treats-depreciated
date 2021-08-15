"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useIncrementingNumber_1 = __importDefault(require("./useIncrementingNumber"));
var range_1 = __importDefault(require("../utils/range"));
var generateId_1 = __importDefault(require("../utils/generateId"));
var rainbowColors = [
    "hsl(1deg, 96%, 55%)",
    "hsl(25deg, 100%, 50%)",
    "hsl(40deg, 100%, 50%)",
    "hsl(45deg, 100%, 50%)",
    "hsl(66deg, 100%, 45%)",
    "hsl(130deg, 100%, 40%)",
    "hsl(177deg, 100%, 35%)",
    "hsl(230deg, 100%, 45%)",
    "hsl(240deg, 100%, 45%)",
    "hsl(260deg, 100%, 55%)",
    "hsl(325deg, 100%, 48%)",
];
var paletteSize = rainbowColors.length;
var WINDOW_SIZE = 3;
var hasBrowserSupport = typeof window !== "undefined"
    ? // @ts-ignore
        typeof window.CSS.registerProperty === "function"
    : false;
var getColorPropName = function (id, index) {
    return "--magic-rainbow-color-" + id + "-" + index;
};
var useRainbow = function (_a) {
    var _b = _a.intervalDelay, intervalDelay = _b === void 0 ? 2000 : _b;
    var prefersReducedMotion = typeof window === "undefined"
        ? true
        : window.matchMedia("(prefers-reduced-motion: no-preference)");
    // @ts-ignore
    var isEnabled = hasBrowserSupport && prefersReducedMotion.matches;
    var uniqueId = react_1.useRef(generateId_1.default()).current;
    react_1.useEffect(function () {
        if (!isEnabled) {
            return;
        }
        range_1.default(0, WINDOW_SIZE).map(function (index) {
            var name = getColorPropName(uniqueId, index);
            var initialValue = rainbowColors[index];
            // @ts-ignore
            return CSS.registerProperty({
                name: name,
                initialValue: initialValue,
                syntax: "<color>",
                inherits: false,
            });
        });
    }, [WINDOW_SIZE, isEnabled]);
    var intervalCount = useIncrementingNumber_1.default(intervalDelay);
    return range_1.default(0, WINDOW_SIZE).reduce(function (acc, index) {
        var _a;
        var effectiveIntervalCount = isEnabled ? intervalCount : 0;
        var name = getColorPropName(uniqueId, index);
        var value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];
        return __assign(__assign({}, acc), (_a = {}, _a[name] = value, _a));
    }, {});
};
exports.default = useRainbow;
