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
var Switch = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.height, height = _c === void 0 ? 25 : _c, _d = _a.background, background = _d === void 0 ? "black" : _d, _e = _a.ballColor, ballColor = _e === void 0 ? "white" : _e, onClick = _a.onClick;
    var _f = (0, react_1.useState)(false), on = _f[0], setOn = _f[1];
    var width = height * 2;
    var styles = {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        outline: "".concat(height * 0.1, "px solid ").concat(background),
        background: background,
    };
    var ballClass = (0, classnames_1.default)("switch__ball", {
        "switch__ball--on": on,
        "switch__ball--off": !on,
    });
    var handleClick = function () {
        onClick && onClick();
        setOn(!on);
    };
    return (react_1.default.createElement("button", { className: "switch ".concat(className), onClick: handleClick, style: styles },
        react_1.default.createElement("span", { className: ballClass, style: { backgroundColor: ballColor } })));
};
exports.default = Switch;
