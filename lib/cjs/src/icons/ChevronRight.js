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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ChevronRight = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.6681 23.5225C35.5766 23.2132 35.4087 22.9217 35.1647 22.6777L32.3362 19.8492L17.487 5L13.2444 9.24264L28.0936 24.0919L13.2444 38.9411L17.487 43.1838L32.3362 28.3345L35.1647 25.5061C35.5592 25.1116 35.7544 24.5933 35.7504 24.0763C35.749 23.8896 35.7215 23.703 35.6681 23.5225Z", fill: color })));
};
exports.default = ChevronRight;
