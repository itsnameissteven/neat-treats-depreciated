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
var Spacer = function (_a) {
    var size = _a.size, axis = _a.axis, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.color, color = _c === void 0 ? "transparent" : _c, _d = _a.nonSquareSpace, nonSquareSpace = _d === void 0 ? 1 : _d, _e = _a.isRounded, isRounded = _e === void 0 ? false : _e, delegated = __rest(_a, ["size", "axis", "style", "color", "nonSquareSpace", "isRounded"]);
    var width = axis === "vertical" ? nonSquareSpace : size;
    var height = axis === "horizontal" ? nonSquareSpace : size;
    return (react_1.default.createElement("span", __assign({ style: __assign({ display: "block", width: width, minWidth: width, height: height, minHeight: height, backgroundColor: color, borderRadius: isRounded ? "50px" : "0px" }, style) }, delegated)));
};
exports.default = Spacer;
