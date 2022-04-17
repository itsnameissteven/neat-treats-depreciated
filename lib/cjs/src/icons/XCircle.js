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
var XCircle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM12.6863 15.5147C12.2958 15.1242 12.2958 14.491 12.6863 14.1005L14.1005 12.6863C14.491 12.2958 15.1242 12.2958 15.5147 12.6863L24 21.1716L32.4853 12.6863C32.8758 12.2958 33.509 12.2958 33.8995 12.6863L35.3137 14.1005C35.7042 14.491 35.7042 15.1242 35.3137 15.5147L26.8284 24L35.3137 32.4853C35.7042 32.8758 35.7042 33.509 35.3137 33.8995L33.8995 35.3137C33.509 35.7042 32.8758 35.7042 32.4853 35.3137L24 26.8284L15.5147 35.3137C15.1242 35.7042 14.491 35.7042 14.1005 35.3137L12.6863 33.8995C12.2958 33.509 12.2958 32.8758 12.6863 32.4853L21.1716 24L12.6863 15.5147Z", fill: color })));
};
exports.default = XCircle;
