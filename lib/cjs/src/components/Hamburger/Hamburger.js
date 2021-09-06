"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./Hamburger.scss");
var Hamburger = function (_a) {
    var _b, _c, _d;
    var _e = _a.size, size = _e === void 0 ? "40px" : _e, className = _a.className, handleClick = _a.handleClick, isActive = _a.isActive, _f = _a.pipes, pipes = _f === void 0 ? 3 : _f, _g = _a.animationTime, animationTime = _g === void 0 ? "400ms" : _g, color = _a.color, zIndex = _a.zIndex, position = _a.position;
    var _h = react_1.useState(false), isClicked = _h[0], setIsClicked = _h[1];
    var _j = react_1.useState(true), firstRender = _j[0], setFirstRender = _j[1];
    var topClass = classnames_1.default((_b = {},
        _b["animate-top"] = isActive,
        _b["hamburger__top"] = !firstRender && !isActive,
        _b));
    var middleClass = classnames_1.default((_c = {},
        _c["animate-middle"] = isActive,
        _c["hamburger__middle"] = !firstRender && !isActive,
        _c));
    var bottomClass = classnames_1.default((_d = {},
        _d["animate-bottom"] = isActive,
        _d["hamburger__bottom"] = !firstRender && !isActive,
        _d));
    react_1.useEffect(function () {
        if (isClicked) {
            setFirstRender(false);
        }
    }, [isClicked]);
    var passedClick = function () {
        if (handleClick) {
            handleClick();
            setFirstRender(false);
        }
        else {
            setIsClicked(!isClicked);
        }
    };
    var _k = position || {}, top = _k.top, left = _k.left, right = _k.right;
    var styles = {
        fill: color,
        zIndex: zIndex,
        top: top,
        left: left,
        right: right,
    };
    var animationDuration = animationTime;
    return (react_1.default.createElement("svg", { className: "hamburger " + className, viewBox: "0 0 110 100", width: size, height: size, style: styles, onClick: passedClick },
        pipes === 3 && (react_1.default.createElement("rect", { className: topClass, width: "110", height: "16", rx: "8", style: { animationDuration: animationDuration } })),
        react_1.default.createElement("rect", { className: middleClass, y: "40", width: "110", height: "16", rx: "8", style: { animationDuration: animationDuration } }),
        react_1.default.createElement("rect", { className: bottomClass, y: "80", width: "110", height: "16", rx: "8", style: { animationDuration: animationDuration } })));
};
exports.default = Hamburger;
