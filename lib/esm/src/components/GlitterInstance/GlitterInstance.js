var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled, { keyframes } from "styled-components";
var GlitterInstance = function (_a) {
    var color = _a.color, size = _a.size, style = _a.style;
    var path = "M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z";
    return (React.createElement(GlitterWrapper, { style: style },
        React.createElement(GlitterWrapperSvg, { width: size, height: size, fill: "none", viewBox: "0 0 160 160" },
            React.createElement("path", { fill: color, d: path }))));
};
var growAndShrink = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n0% {\n  transform: scale(0.01);\n}\n50% {\n  transform: scale(1);\n}\n100% {\n  transform: scale(0.01);\n}\n"], ["\n0% {\n  transform: scale(0.01);\n}\n50% {\n  transform: scale(1);\n}\n100% {\n  transform: scale(0.01);\n}\n"])));
var spin = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nfrom {\n  transform: rotate(0deg);\n}\nto {\n  transform: rotate(180deg);\n}\n"], ["\nfrom {\n  transform: rotate(0deg);\n}\nto {\n  transform: rotate(180deg);\n}\n"])));
var GlitterWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  display: block;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: ", " 600ms ease-in-out forwards;\n  }\n"], ["\n  position: absolute;\n  display: block;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: ", " 600ms ease-in-out forwards;\n  }\n"])), growAndShrink);
var GlitterWrapperSvg = styled.svg(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: ", " 600ms linear forwards;\n  }\n"], ["\n  display: block;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: ", " 600ms linear forwards;\n  }\n"])), spin);
export default GlitterInstance;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
