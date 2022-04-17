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
var ArrowLeft = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M9.93934 22.9393C9.35355 23.5251 9.35355 24.4749 9.93934 25.0607L19.4853 34.6066C20.0711 35.1924 21.0208 35.1924 21.6066 34.6066C22.1924 34.0208 22.1924 33.0711 21.6066 32.4853L13.1213 24L21.6066 15.5147C22.1924 14.9289 22.1924 13.9792 21.6066 13.3934C21.0208 12.8076 20.0711 12.8076 19.4853 13.3934L9.93934 22.9393ZM39 22.5L11 22.5L11 25.5L39 25.5L39 22.5Z", fill: color })));
};
export default ArrowLeft;
