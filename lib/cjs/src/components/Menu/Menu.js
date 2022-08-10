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
var hooks_1 = require("../../hooks");
var Menu = function (_a) {
    var _b;
    var isOpen = _a.isOpen, children = _a.children, handleClose = _a.handleClose, _c = _a.width, width = _c === void 0 ? '225px' : _c, _d = _a.position, position = _d === void 0 ? 'left' : _d, _e = _a.heightFromTop, heightFromTop = _e === void 0 ? '50px' : _e, _f = _a.backgroundColor, backgroundColor = _f === void 0 ? '#fff' : _f, boxShadow = _a.boxShadow, _g = _a.style, style = _g === void 0 ? {} : _g, _h = _a.containerColor, containerColor = _h === void 0 ? '#0505051c' : _h;
    var _j = (0, react_1.useState)(isOpen), canOpen = _j[0], setCanOpen = _j[1];
    (0, hooks_1.useBodyLock)(isOpen);
    var styles = {
        width: width,
        top: heightFromTop,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
        height: "calc(100vh - ".concat(heightFromTop, ")"),
    };
    var containerClassName = (0, classnames_1.default)({
        menu: true,
        'menu-container-enter': isOpen,
        'menu-container-exit': !isOpen,
    });
    var slideOutClassName = (0, classnames_1.default)((_b = {},
        _b["menu__slide-out--".concat(position)] = true,
        _b["menu__slide-out-enter--".concat(position)] = isOpen,
        _b["menu__slide-out-exit--".concat(position)] = !isOpen,
        _b));
    (0, react_1.useEffect)(function () {
        var delayOpen = setTimeout(function () {
            setCanOpen(isOpen);
        }, 400);
        if (isOpen) {
            setCanOpen(isOpen);
        }
        return function () { return clearTimeout(delayOpen); };
    }, [isOpen]);
    if (!canOpen) {
        return null;
    }
    return (react_1.default.createElement("div", { className: containerClassName, style: {
            backgroundColor: containerColor,
        }, onClick: handleClose },
        react_1.default.createElement("div", { className: slideOutClassName, style: __assign(__assign({}, styles), style) }, children)));
};
exports.default = Menu;
