import React, { useRef, useEffect } from 'react';
import { usePreventAnimation } from '../../hooks';
var ProgressRing = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 70 : _b, _c = _a.stroke, stroke = _c === void 0 ? 3 : _c, _d = _a.border, border = _d === void 0 ? '#ade8f4' : _d, _e = _a.completedBorder, completedBorder = _e === void 0 ? '#0077b6' : _e, percentageComplete = _a.percentageComplete, _f = _a.className, className = _f === void 0 ? '' : _f, _g = _a.hasPercentageDisplay, hasPercentageDisplay = _g === void 0 ? true : _g;
    var circleRef = useRef(null);
    var width = size;
    var strokeWidth = stroke;
    var radius = width / 2 - strokeWidth * 2;
    var noTransition = usePreventAnimation().noTransition;
    useEffect(function () {
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
    return (React.createElement("div", { className: "progress-circle ".concat(className, " ").concat(noTransition) },
        React.createElement("svg", { className: "progress-circle__ring", height: width, width: width },
            React.createElement("circle", { className: "progress-circle__ring__border", stroke: border, strokeWidth: strokeWidth, fill: "transparent", r: radius, cx: width / 2, cy: width / 2 }),
            React.createElement("circle", { ref: circleRef, className: "progress-circle__ring__border", stroke: completedBorder, strokeWidth: strokeWidth, fill: "transparent", r: radius, cx: width / 2, cy: width / 2 })),
        hasPercentageDisplay && (React.createElement("div", { className: 'progress-circle__content' },
            React.createElement("p", { style: { fontSize: "".concat(size * 0.25, "px") } },
                percentageComplete,
                "%")))));
};
export default ProgressRing;
