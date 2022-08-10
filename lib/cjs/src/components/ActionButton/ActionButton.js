"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../hooks");
var __1 = require("..");
var ActionButton = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.stroke, stroke = _c === void 0 ? 2 : _c, _d = _a.border, border = _d === void 0 ? 'grey' : _d, _e = _a.activeBorder, activeBorder = _e === void 0 ? 'black' : _e, animationDirection = _a.animationDirection, children = _a.children, iconName = _a.iconName, iconSize = _a.iconSize, _f = _a.className, className = _f === void 0 ? '' : _f, onClick = _a.onClick;
    var circleRef = (0, react_1.useRef)(null);
    var noAnimation = (0, hooks_1.usePreventAnimation)().noAnimation;
    var width = size;
    var strokeWidth = stroke;
    var radius = width / 2 - strokeWidth * 2;
    var animationClass = animationDirection
        ? "animation-".concat(animationDirection)
        : '';
    (0, react_1.useEffect)(function () {
        var current = circleRef.current;
        if (!current) {
            return;
        }
        var radius = current.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        current.style.strokeDasharray = "".concat(0, " ").concat(circumference);
        current.style.strokeDashoffset = "".concat(circumference);
    }, [circleRef.current]);
    var setProgress = function (percent) {
        var current = circleRef.current;
        if (!current)
            return;
        var radius = current.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        var offset = circumference - (percent / 100) * circumference;
        current.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
        current.style.strokeDashoffset = offset.toString();
    };
    return (react_1.default.createElement("button", { className: "action-btn ".concat(className), onClick: onClick },
        react_1.default.createElement("svg", { className: "action-btn__progress-ring", height: width, width: width },
            react_1.default.createElement("circle", { className: "action-btn__progress-ring__circle", stroke: border, strokeWidth: strokeWidth, fill: "transparent", r: radius, cx: width / 2, cy: width / 2 }),
            react_1.default.createElement("circle", { ref: circleRef, className: "action-btn__progress-ring__circle", stroke: activeBorder, strokeWidth: strokeWidth, fill: "transparent", r: radius, cx: width / 2, cy: width / 2, onMouseEnter: function () { return setProgress(100); }, onMouseLeave: function () { return setProgress(0); } })),
        react_1.default.createElement("div", { className: "action-btn__content ".concat(animationClass, " ").concat(noAnimation) }, children ? (children) : (react_1.default.createElement(__1.Icon, { name: iconName || '', size: iconSize || size * 0.6 })))));
};
exports.default = ActionButton;
