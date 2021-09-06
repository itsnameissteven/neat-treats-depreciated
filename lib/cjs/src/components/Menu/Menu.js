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
require("./Menu.scss");
var Menu = function (_a) {
    var _b, _c;
    var isOpen = _a.isOpen, children = _a.children, handleClose = _a.handleClose, _d = _a.width, width = _d === void 0 ? "225px" : _d, _e = _a.position, position = _e === void 0 ? "left" : _e, _f = _a.heightFromTop, heightFromTop = _f === void 0 ? "50px" : _f, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? "#fff" : _g, boxShadow = _a.boxShadow, style = _a.style, _h = _a.containerColor, containerColor = _h === void 0 ? "#0505051c" : _h;
    var _j = react_1.useState(isOpen), canOpen = _j[0], setCanOpen = _j[1];
    var styles = {
        width: width,
        top: heightFromTop,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
    };
    var containerClassName = classnames_1.default((_b = {
            menu: true
        },
        _b["menu-container-enter"] = isOpen,
        _b["menu-container-exit"] = !isOpen,
        _b));
    var slideOutClassName = classnames_1.default((_c = {},
        _c["menu__slide-out--" + position] = true,
        _c["menu__slide-out-enter--" + position] = isOpen,
        _c["menu__slide-out-exit--" + position] = !isOpen,
        _c));
    react_1.useEffect(function () {
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
        react_1.default.createElement("div", { className: slideOutClassName, style: style ? style : styles }, children)));
};
exports.default = Menu;
