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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
var ArrowRight = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M38.0607 25.0607C38.6464 24.4749 38.6464 23.5251 38.0607 22.9393L28.5147 13.3934C27.9289 12.8076 26.9792 12.8076 26.3934 13.3934C25.8076 13.9792 25.8076 14.9289 26.3934 15.5147L34.8787 24L26.3934 32.4853C25.8076 33.0711 25.8076 34.0208 26.3934 34.6066C26.9792 35.1924 27.9289 35.1924 28.5147 34.6066L38.0607 25.0607ZM9 25.5L37 25.5L37 22.5L9 22.5L9 25.5Z", fill: color })));
};
export default ArrowRight;
