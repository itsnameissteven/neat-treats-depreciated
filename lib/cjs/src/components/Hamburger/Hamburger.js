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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Hamburger = function (_a) {
    var _b, _c, _d, _e, _f;
    var _g = _a.size, size = _g === void 0 ? "30px" : _g, className = _a.className, onClick = _a.onClick, _h = _a.pipes, pipes = _h === void 0 ? 3 : _h, _j = _a.animationTime, animationTime = _j === void 0 ? "400ms" : _j, color = _a.color, zIndex = _a.zIndex, position = _a.position;
    var _k = (0, react_1.useState)(false), isClicked = _k[0], setIsClicked = _k[1];
    var _l = (0, react_1.useState)(true), firstRender = _l[0], setFirstRender = _l[1];
    var topClass = (0, classnames_1.default)((_b = {},
        _b["animate-top"] = isClicked,
        _b["hamburger__top"] = !firstRender && !isClicked,
        _b));
    var middleClass = (0, classnames_1.default)((_c = {},
        _c["animate-middle"] = isClicked,
        _c["hamburger__middle"] = !firstRender && !isClicked,
        _c));
    var bottomClass = (0, classnames_1.default)((_d = {},
        _d["animate-bottom"] = isClicked,
        _d["hamburger__bottom"] = !firstRender && !isClicked,
        _d));
    var topClassTwoPipe = (0, classnames_1.default)((_e = {},
        _e["animate-top--two"] = isClicked,
        _e["hamburger__top--two"] = !firstRender && !isClicked,
        _e));
    var bottomClassTwoPipe = (0, classnames_1.default)((_f = {},
        _f["animate-bottom--two"] = isClicked,
        _f["hamburger__bottom--two"] = !firstRender && !isClicked,
        _f));
    (0, react_1.useEffect)(function () {
        if (isClicked) {
            setFirstRender(false);
        }
    }, [isClicked]);
    var passedClick = function () {
        setIsClicked(!isClicked);
        onClick && onClick();
    };
    var _m = position || {}, top = _m.top, left = _m.left, right = _m.right;
    var styles = {
        fill: color,
        zIndex: zIndex,
        top: top,
        left: left,
        right: right,
    };
    var animationDuration = animationTime;
    if (pipes === 2) {
        return (react_1.default.createElement("svg", { className: "hamburger ".concat(className), width: size, height: size, style: styles, onClick: passedClick, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("rect", { className: topClassTwoPipe, x: "2", y: "14", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
            react_1.default.createElement("rect", { className: bottomClassTwoPipe, x: "2", y: "28", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } })));
    }
    return (react_1.default.createElement("svg", { className: "hamburger ".concat(className), viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, style: styles, onClick: passedClick },
        react_1.default.createElement("rect", { className: topClass, x: "2", y: "6", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
        react_1.default.createElement("rect", { className: middleClass, x: "2", y: "21", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
        react_1.default.createElement("rect", { className: bottomClass, x: "2", y: "36", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } })));
};
exports.default = Hamburger;
