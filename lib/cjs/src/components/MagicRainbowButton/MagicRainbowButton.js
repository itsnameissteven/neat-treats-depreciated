"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var useRainbow_1 = __importDefault(require("../../hooks/useRainbow"));
var ButtonElem = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 20px 40px;\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-transform: uppercase;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    height: 30%;\n    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.17));\n    border-radius: 0 0 12px 12px;\n    pointer-events: none;\n  }\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    top: 2px;\n    left: 6px;\n    right: 6px;\n    height: 20%;\n    background: linear-gradient(\n      rgba(255, 255, 255, 0.25),\n      rgba(255, 255, 255, 0)\n    );\n    border-radius: 20px 20px 100px 100px / 14px 14px 30px 30px;\n    pointer-events: none;\n  }\n"], ["\n  position: relative;\n  padding: 20px 40px;\n  border: none;\n  border-radius: 12px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-transform: uppercase;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);\n\n  &::after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    height: 30%;\n    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.17));\n    border-radius: 0 0 12px 12px;\n    pointer-events: none;\n  }\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    top: 2px;\n    left: 6px;\n    right: 6px;\n    height: 20%;\n    background: linear-gradient(\n      rgba(255, 255, 255, 0.25),\n      rgba(255, 255, 255, 0)\n    );\n    border-radius: 20px 20px 100px 100px / 14px 14px 30px 30px;\n    pointer-events: none;\n  }\n"])));
var MagicRainbowButton = function (_a) {
    var children = _a.children, _b = _a.intervalDelay, intervalDelay = _b === void 0 ? 2000 : _b, delegated = __rest(_a, ["children", "intervalDelay"]);
    var transitionDelay = intervalDelay * 1.25;
    var colors = (0, useRainbow_1.default)({ intervalDelay: intervalDelay });
    var colorKeys = Object.keys(colors);
    return (react_1.default.createElement(ButtonElem, __assign({}, delegated, { style: __assign(__assign({}, colors), { transition: "\n          ".concat(colorKeys[0], " ").concat(transitionDelay, "ms linear,\n          ").concat(colorKeys[1], " ").concat(transitionDelay, "ms linear,\n          ").concat(colorKeys[2], " ").concat(transitionDelay, "ms linear\n        "), background: "\n          radial-gradient(\n            circle at top left,\n            var(".concat(colorKeys[2], "),\n            var(").concat(colorKeys[1], "),\n            var(").concat(colorKeys[0], ")\n          )\n        ") }) }), children));
};
exports.default = MagicRainbowButton;
var templateObject_1;
