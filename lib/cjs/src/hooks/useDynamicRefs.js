"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDynamicRefs = function () {
    var refs = (0, react_1.useRef)({});
    var setRef = function (element, key) {
        refs.current[key] = element;
    };
    var scrollToRef = function (_a) {
        var _b, _c;
        var key = _a.key, _d = _a.options, options = _d === void 0 ? { behavior: 'smooth', block: 'center', inline: 'center' } : _d;
        (_c = (_b = refs === null || refs === void 0 ? void 0 : refs.current) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c.scrollIntoView(options);
    };
    var scrollToTop = function (_a) {
        var _b, _c;
        var key = _a.key, _d = _a.options, options = _d === void 0 ? { top: 0, left: 0, behavior: 'smooth' } : _d;
        (_c = (_b = refs === null || refs === void 0 ? void 0 : refs.current) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c.scrollIntoView(options);
    };
    return {
        refs: refs,
        setRef: setRef,
        scrollToRef: scrollToRef,
        scrollToTop: scrollToTop,
    };
};
exports.default = useDynamicRefs;
