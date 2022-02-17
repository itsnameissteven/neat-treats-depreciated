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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var __1 = require("..");
var hooks_1 = require("../../hooks");
var DarkModeButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, onClick = _a.onClick, offIcon = _a.offIcon, onIcon = _a.onIcon, _c = _a.size, size = _c === void 0 ? 50 : _c;
    var _d = (0, hooks_1.useLocalStorage)("dark-mode", true), isDark = _d[0], setIsDark = _d[1];
    var noTransition = (0, hooks_1.usePreventAnimation)().noTransition;
    (0, react_1.useEffect)(function () {
        if (isDark) {
            document.body.classList.add("dark-mode");
        }
        else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDark]);
    var handleClick = function () {
        setIsDark(!isDark);
        onClick && onClick();
    };
    var iconSize = size * 0.66;
    return (react_1.default.createElement("button", { className: "dark-mode-button ".concat(className), onClick: handleClick, style: {
            width: "".concat(size, "px"),
            height: "".concat(size, "px"),
        } },
        react_1.default.createElement("span", { className: "dark-mode-button__icon--light ".concat(noTransition) }, offIcon || react_1.default.createElement(__1.Icon, { name: "sun", size: iconSize, color: "#1F2028" })),
        react_1.default.createElement("span", { className: "dark-mode-button__icon--dark ".concat(noTransition) }, onIcon || react_1.default.createElement(__1.Icon, { name: "moon", size: iconSize, color: "#fff" }))));
};
exports.default = DarkModeButton;
