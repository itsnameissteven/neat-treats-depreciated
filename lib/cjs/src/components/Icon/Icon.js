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
var classnames_1 = __importDefault(require("classnames"));
var Icon = function (_a) {
    // started logic for dynamic import
    var name = _a.name, size = _a.size, color = _a.color, className = _a.className, onClick = _a.onClick, disabled = _a.disabled;
    var Component = null;
    var iconName = name
        .split("-")
        .map(function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    })
        .join("");
    try {
        Component = require("../../icons/".concat(iconName, ".js")).default;
    }
    catch (_b) {
        try {
            Component = require("../../icons/".concat(iconName, ".tsx")).default;
        }
        catch (_c) {
            console.log("Icon ".concat(name, " does not exist."));
        }
    }
    if (!Component) {
        return null;
    }
    var CreatedItem = function (_a) {
        var props = __rest(_a, []);
        return react_1.default.createElement(Component, __assign({ size: size, color: color, className: className }, props));
    };
    if (onClick) {
        return (react_1.default.createElement("button", { onClick: onClick, className: (0, classnames_1.default)(className), disabled: disabled },
            react_1.default.createElement(CreatedItem, { className: null })));
    }
    return react_1.default.createElement(CreatedItem, null);
};
exports.default = Icon;
