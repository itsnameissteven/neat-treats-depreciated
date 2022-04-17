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
var Plus = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 9C22.4477 9 22 9.44772 22 10V22H10C9.44772 22 9 22.4477 9 23V25C9 25.5523 9.44772 26 10 26H22V38C22 38.5523 22.4477 39 23 39H25C25.5523 39 26 38.5523 26 38V26H38C38.5523 26 39 25.5523 39 25V23C39 22.4477 38.5523 22 38 22H26V10C26 9.44772 25.5523 9 25 9H23Z", fill: color })));
};
exports.default = Plus;
