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
import React from "react";
var ProgressBar = function (_a) {
    var _b = _a.height, height = _b === void 0 ? "5px" : _b, _c = _a.background, background = _c === void 0 ? "#ade8f4" : _c, _d = _a.completedBorder, completedBorder = _d === void 0 ? "#0077b6" : _d, percentageComplete = _a.percentageComplete, _e = _a.className, className = _e === void 0 ? "" : _e, _f = _a.style, style = _f === void 0 ? {} : _f;
    return (React.createElement("div", { className: "progress-bar ".concat(className), style: __assign({ height: height, minHeight: height, width: "100%", backgroundColor: background }, style) },
        React.createElement("div", { className: "progress-bar__inner", style: {
                width: "".concat(percentageComplete, "%"),
                backgroundColor: completedBorder,
            } })));
};
export default ProgressBar;
