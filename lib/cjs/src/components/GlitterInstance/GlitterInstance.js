"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var GlitterInstance = function (_a) {
    var color = _a.color, size = _a.size, style = _a.style;
    var path = "M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z";
    return (react_1.default.createElement(GlitterWrapper, { style: style },
        react_1.default.createElement(GlitterWrapperSvg, { width: size, height: size, fill: "none", viewBox: "0 0 160 160" },
            react_1.default.createElement("path", { fill: color, d: path }))));
};
var growAndShrink = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n0% {\n  transform: scale(0);\n}\n50% {\n  transform: scale(1);\n}\n100% {\n  transform: scale(0);\n}\n"], ["\n0% {\n  transform: scale(0);\n}\n50% {\n  transform: scale(1);\n}\n100% {\n  transform: scale(0);\n}\n"])));
var spin = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nfrom {\n  transform: rotate(0deg);\n}\nto {\n  transform: rotate(180deg);\n}\n"], ["\nfrom {\n  transform: rotate(0deg);\n}\nto {\n  transform: rotate(180deg);\n}\n"])));
var GlitterWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  display: block;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: ", " 600ms ease-in-out forwards;\n  }\n"], ["\n  position: absolute;\n  display: block;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: ", " 600ms ease-in-out forwards;\n  }\n"])), growAndShrink);
var GlitterWrapperSvg = styled_components_1.default.svg(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: ", " 600ms linear forwards;\n  }\n"], ["\n  display: block;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: ", " 600ms linear forwards;\n  }\n"])), spin);
exports.default = GlitterInstance;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
