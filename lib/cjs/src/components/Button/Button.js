"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
require("./Button.scss");
var Button = function (_a) {
    var _b;
    var _c = _a.type, type = _c === void 0 ? "primary" : _c, _d = _a.round, round = _d === void 0 ? false : _d, backgroundColor = _a.backgroundColor, children = _a.children, className = _a.className, onClick = _a.onClick;
    var btnClass = classnames_1.default((_b = {
            "nt-btn": true
        },
        _b["btn-" + type] = true,
        _b.round = round,
        _b));
    var style = type === "outline"
        ? { color: backgroundColor, borderColor: backgroundColor }
        : { backgroundColor: backgroundColor };
    return (react_1.default.createElement("button", { className: btnClass + " " + className, onClick: onClick, style: style }, children));
};
exports.default = Button;
