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
var ShoppingCart = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? 'black' : _c, props = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        react_1.default.createElement("path", { d: "M14.4 38.4C11.76 38.4 9.624 40.56 9.624 43.2C9.624 45.84 11.76 48 14.4 48C17.04 48 19.2 45.84 19.2 43.2C19.2 40.56 17.04 38.4 14.4 38.4ZM0 0V4.8H4.8L13.44 23.016L10.2 28.896C9.816 29.568 9.6 30.36 9.6 31.2C9.6 33.84 11.76 36 14.4 36H43.2V31.2H15.408C15.072 31.2 14.808 30.936 14.808 30.6L14.88 30.312L17.04 26.4H34.92C36.72 26.4 38.304 25.416 39.12 23.928L47.712 8.352C47.904 8.016 48 7.608 48 7.2C48 5.88 46.92 4.8 45.6 4.8H10.104L7.848 0H0ZM38.4 38.4C35.76 38.4 33.624 40.56 33.624 43.2C33.624 45.84 35.76 48 38.4 48C41.04 48 43.2 45.84 43.2 43.2C43.2 40.56 41.04 38.4 38.4 38.4Z", fill: color })));
};
exports.default = ShoppingCart;
