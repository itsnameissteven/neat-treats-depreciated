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
var ChevronCircleLeft = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 48 : _b, _c = _a.color, color = _c === void 0 ? "black" : _c, props = __rest(_a, ["size", "color"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM14.5858 25.5061C13.8047 24.7251 13.8047 23.4587 14.5858 22.6777L16.7071 20.5564L28.7279 8.53554L32.2635 12.0711L20.2426 24.0919L32.2635 36.1127L28.7279 39.6482L16.7071 27.6274L14.5858 25.5061Z", fill: color }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM14.5858 25.5061C13.8047 24.7251 13.8047 23.4587 14.5858 22.6777L16.7071 20.5564L28.7279 8.53554L32.2635 12.0711L20.2426 24.0919L32.2635 36.1127L28.7279 39.6482L16.7071 27.6274L14.5858 25.5061Z", fill: color, fillOpacity: "0.2" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM14.5858 25.5061C13.8047 24.7251 13.8047 23.4587 14.5858 22.6777L16.7071 20.5564L28.7279 8.53554L32.2635 12.0711L20.2426 24.0919L32.2635 36.1127L28.7279 39.6482L16.7071 27.6274L14.5858 25.5061Z", fill: color })));
};
export default ChevronCircleLeft;
