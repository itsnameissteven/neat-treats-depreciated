"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var hooks_1 = require("../../hooks");
var Hamburger = function (_a) {
    var _b = _a.size, size = _b === void 0 ? "30px" : _b, className = _a.className, _c = _a.onClick, onClick = _c === void 0 ? function () { return null; } : _c, _d = _a.onMouseDown, onMouseDown = _d === void 0 ? function () { return null; } : _d, _e = _a.pipes, pipes = _e === void 0 ? 3 : _e, _f = _a.animationTime, animationTime = _f === void 0 ? "400ms" : _f, color = _a.color, zIndex = _a.zIndex, position = _a.position, isActive = _a.isActive;
    var noAnimation = (0, hooks_1.usePreventAnimation)().noAnimation;
    var topClass = (0, classnames_1.default)("hamburger__top", {
        "animate-top": isActive,
    });
    var middleClass = (0, classnames_1.default)(" hamburger__middle", {
        "animate-middle": isActive,
    });
    var bottomClass = (0, classnames_1.default)("hamburger__bottom", {
        "animate-bottom": isActive,
    });
    var topClassTwoPipe = (0, classnames_1.default)("hamburger__top--two", {
        "animate-top--two": isActive,
    });
    var bottomClassTwoPipe = (0, classnames_1.default)("hamburger__bottom--two", {
        "animate-bottom--two": isActive,
    });
    var _g = position || {}, top = _g.top, left = _g.left, right = _g.right;
    var styles = {
        fill: color,
        zIndex: zIndex,
        top: top,
        left: left,
        right: right,
    };
    var animationDuration = animationTime;
    if (pipes === 2) {
        return (react_1.default.createElement("svg", { className: "hamburger ".concat(className, " ").concat(noAnimation), width: size, height: size, style: styles, onMouseDown: onMouseDown, onClick: onClick, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("rect", { className: topClassTwoPipe, x: "2", y: "14", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
            react_1.default.createElement("rect", { className: bottomClassTwoPipe, x: "2", y: "28", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } })));
    }
    return (react_1.default.createElement("svg", { className: "hamburger ".concat(className, " ").concat(noAnimation), viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, style: styles, onClick: onClick },
        react_1.default.createElement("rect", { className: topClass, x: "2", y: "6", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
        react_1.default.createElement("rect", { className: middleClass, x: "2", y: "21", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
        react_1.default.createElement("rect", { className: bottomClass, x: "2", y: "36", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } })));
};
exports.default = Hamburger;
