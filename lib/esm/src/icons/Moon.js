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
var Moon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("mask", { id: "path-1-inside-1_104_156", fill: "white" },
            React.createElement("path", { d: "M36.7228 29.6658C36.9253 29.2438 36.604 28.7787 36.1378 28.7368C29.5101 28.1415 24.3158 22.5721 24.3158 15.7895C24.3158 14.3934 24.5491 13.2036 24.9501 11.8693C25.0799 11.4372 24.7669 11 24.3158 11V11C17.1361 11 12 16.8203 12 24C12 31.1797 17.8203 37 25 37C30.1019 37 34.8816 33.5036 36.7228 29.6658Z" })),
        React.createElement("path", { d: "M24.9501 11.8693L26.9158 12.4601L24.9501 11.8693ZM36.7228 29.6658L38.5735 30.5537L36.7228 29.6658ZM36.3214 26.6924C30.7424 26.1913 26.3684 21.5 26.3684 15.7895H22.2632C22.2632 23.6442 28.2778 30.0917 35.9542 30.7812L36.3214 26.6924ZM26.3684 15.7895C26.3684 14.6503 26.5534 13.6659 26.9158 12.4601L22.9843 11.2785C22.5447 12.7412 22.2632 14.1366 22.2632 15.7895H26.3684ZM14.0526 24C14.0526 17.8053 18.4129 13.0526 24.3158 13.0526V8.94737C15.8593 8.94737 9.94737 15.8353 9.94737 24H14.0526ZM25 34.9474C18.9539 34.9474 14.0526 30.0461 14.0526 24H9.94737C9.94737 32.3133 16.6867 39.0526 25 39.0526V34.9474ZM34.8721 28.778C33.3454 31.9602 29.2516 34.9474 25 34.9474V39.0526C30.9521 39.0526 36.4178 35.047 38.5735 30.5537L34.8721 28.778ZM26.9158 12.4601C27.4255 10.7642 26.1976 8.94737 24.3158 8.94737V13.0526C23.3363 13.0526 22.7343 12.1102 22.9843 11.2785L26.9158 12.4601ZM35.9542 30.7812C35.5507 30.745 35.185 30.5235 34.9601 30.1775C34.7204 29.8089 34.635 29.2722 34.8721 28.778L38.5735 30.5537C39.5163 28.5884 37.924 26.8364 36.3214 26.6924L35.9542 30.7812Z", fill: color, mask: "url(#path-1-inside-1_104_156)" })));
};
export default Moon;
