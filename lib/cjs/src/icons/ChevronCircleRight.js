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
var ChevronCircleRight = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (react_1.default.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM33.4142 22.4939C34.1953 23.2749 34.1953 24.5413 33.4142 25.3223L31.2929 27.4436L19.2721 39.4645L15.7365 35.9289L27.7574 23.9081L15.7365 11.8873L19.2721 8.35176L31.2929 20.3726L33.4142 22.4939Z", fill: color }),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM33.4142 22.4939C34.1953 23.2749 34.1953 24.5413 33.4142 25.3223L31.2929 27.4436L19.2721 39.4645L15.7365 35.9289L27.7574 23.9081L15.7365 11.8873L19.2721 8.35176L31.2929 20.3726L33.4142 22.4939Z", fill: color, fillOpacity: "0.2" }),
        react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM33.4142 22.4939C34.1953 23.2749 34.1953 24.5413 33.4142 25.3223L31.2929 27.4436L19.2721 39.4645L15.7365 35.9289L27.7574 23.9081L15.7365 11.8873L19.2721 8.35176L31.2929 20.3726L33.4142 22.4939Z", fill: color })));
};
exports.default = ChevronCircleRight;
