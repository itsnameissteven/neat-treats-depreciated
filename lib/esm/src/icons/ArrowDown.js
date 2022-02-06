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
var ArrowDown = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M22.9393 38.0607C23.5251 38.6464 24.4749 38.6464 25.0607 38.0607L34.6066 28.5147C35.1924 27.9289 35.1924 26.9792 34.6066 26.3934C34.0208 25.8076 33.0711 25.8076 32.4853 26.3934L24 34.8787L15.5147 26.3934C14.9289 25.8076 13.9792 25.8076 13.3934 26.3934C12.8076 26.9792 12.8076 27.9289 13.3934 28.5147L22.9393 38.0607ZM22.5 9L22.5 37L25.5 37L25.5 9L22.5 9Z", fill: color })));
};
export default ArrowDown;
