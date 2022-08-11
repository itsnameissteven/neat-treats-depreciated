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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var hooks_1 = require("../../hooks");
var Menu = function (_a) {
    var _b;
    var isOpen = _a.isOpen, children = _a.children, handleClose = _a.handleClose, _c = _a.width, width = _c === void 0 ? "225px" : _c, _d = _a.position, position = _d === void 0 ? "left" : _d, _e = _a.heightFromTop, heightFromTop = _e === void 0 ? "50px" : _e, _f = _a.backgroundColor, backgroundColor = _f === void 0 ? "#fff" : _f, boxShadow = _a.boxShadow, _g = _a.style, style = _g === void 0 ? {} : _g, _h = _a.containerColor, containerColor = _h === void 0 ? "#0505051c" : _h, _j = _a.className, className = _j === void 0 ? "" : _j;
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
        "menu-container-enter": isOpen,
        "menu-container-exit": !isOpen,
    });
    var slideOutClassName = (0, classnames_1.default)((_b = {},
        _b["menu__slide-out--".concat(position)] = true,
        _b["menu__slide-out-enter--".concat(position)] = isOpen,
        _b["menu__slide-out-exit--".concat(position)] = !isOpen,
        _b));
    return (react_1.default.createElement("div", { className: "".concat(containerClassName, " ").concat(className), style: {
            backgroundColor: containerColor,
        }, onClick: handleClose },
        react_1.default.createElement("div", { className: slideOutClassName, style: __assign(__assign({}, styles), style) }, children)));
};
exports.default = Menu;
