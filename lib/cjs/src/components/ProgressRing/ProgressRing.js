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
var hooks_1 = require("../../hooks");
var ProgressRing = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 70 : _b, _c = _a.stroke, stroke = _c === void 0 ? 3 : _c, _d = _a.border, border = _d === void 0 ? "#ade8f4" : _d, _e = _a.completedBorder, completedBorder = _e === void 0 ? "#0077b6" : _e, percentageComplete = _a.percentageComplete, _f = _a.className, className = _f === void 0 ? "" : _f, _g = _a.hasPercentageDisplay, hasPercentageDisplay = _g === void 0 ? true : _g;
    var circleRef = (0, react_1.useRef)(null);
    var width = size;
    var strokeWidth = stroke;
    var radius = width / 2 - strokeWidth * 2;
    var noTransition = (0, hooks_1.usePreventAnimation)().noTransition;
    (0, react_1.useEffect)(function () {
        var current = circleRef.current;
        if (!current) {
            return;
        }
        var radius = current.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        current.style.strokeDasharray = "".concat(0, " ").concat(circumference);
        current.style.strokeDashoffset = "".concat(circumference);
        var setProgress = function (percent) {
            var current = circleRef.current;
            if (!current)
                return;
            var radius = current.r.baseVal.value;
            var circumference = radius * 2 * Math.PI;
            var offset = circumference - (percent / 100) * circumference;
            current.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
            current.style.strokeDashoffset = offset.toString();
        };
        setProgress(percentageComplete);
    }, [circleRef.current, percentageComplete, size, stroke]);
    return (react_1.default.createElement("div", { className: "progress-circle ".concat(className, " ").concat(noTransition) },
        react_1.default.createElement("svg", { className: "progress-circle__ring", height: width, width: width },
            react_1.default.createElement("circle", { className: "progress-circle__ring__border", stroke: border, strokeWidth: strokeWidth, fill: "transparent", r: radius, cx: width / 2, cy: width / 2 }),
            react_1.default.createElement("circle", { ref: circleRef, className: "progress-circle__ring__border", stroke: completedBorder, strokeWidth: strokeWidth, fill: "transparent", r: radius, cx: width / 2, cy: width / 2 })),
        hasPercentageDisplay && (react_1.default.createElement("div", { className: "progress-circle__content" },
            react_1.default.createElement("p", { style: { fontSize: "".concat(size * 0.25, "px") } },
                percentageComplete,
                "%")))));
};
exports.default = ProgressRing;
