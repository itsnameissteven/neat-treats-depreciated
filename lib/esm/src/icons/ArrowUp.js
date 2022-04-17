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
var ArrowUp = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M25.0607 9.93934C24.4749 9.35355 23.5251 9.35355 22.9393 9.93934L13.3934 19.4853C12.8076 20.0711 12.8076 21.0208 13.3934 21.6066C13.9792 22.1924 14.9289 22.1924 15.5147 21.6066L24 13.1213L32.4853 21.6066C33.0711 22.1924 34.0208 22.1924 34.6066 21.6066C35.1924 21.0208 35.1924 20.0711 34.6066 19.4853L25.0607 9.93934ZM25.5 39L25.5 11L22.5 11L22.5 39L25.5 39Z", fill: color })));
};
export default ArrowUp;
