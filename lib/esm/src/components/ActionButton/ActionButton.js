import React, { useRef, useEffect } from 'react';
import { usePreventAnimation } from '../../hooks';
import { Icon } from '..';
var ActionButton = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 50 : _b, _c = _a.stroke, stroke = _c === void 0 ? 2 : _c, _d = _a.border, border = _d === void 0 ? 'grey' : _d, _e = _a.activeBorder, activeBorder = _e === void 0 ? 'black' : _e, animationDirection = _a.animationDirection, children = _a.children, iconName = _a.iconName, iconSize = _a.iconSize, _f = _a.className, className = _f === void 0 ? '' : _f, onClick = _a.onClick;
    var circleRef = useRef(null);
    var noAnimation = usePreventAnimation().noAnimation;
    var width = size;
    var strokeWidth = stroke;
    var radius = width / 2 - strokeWidth * 2;
    var animationClass = animationDirection
        ? "animation-".concat(animationDirection)
        : '';
    useEffect(function () {
        var current = circleRef.current;
        if (!current) {
            return;
        }
        var radius = current.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        current.style.strokeDasharray = "".concat(0, " ").concat(circumference);
        current.style.strokeDashoffset = "".concat(circumference);
    }, [circleRef.current]);
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
    return (React.createElement("button", { className: "action-btn ".concat(className), onClick: onClick },
        React.createElement("svg", { className: "action-btn__progress-ring", height: width, width: width },
            React.createElement("circle", { className: "action-btn__progress-ring__circle", stroke: border, strokeWidth: strokeWidth, fill: "transparent", r: radius, cx: width / 2, cy: width / 2 }),
            React.createElement("circle", { ref: circleRef, className: "action-btn__progress-ring__circle", stroke: activeBorder, strokeWidth: strokeWidth, fill: "transparent", r: radius, cx: width / 2, cy: width / 2, onMouseEnter: function () { return setProgress(100); }, onMouseLeave: function () { return setProgress(0); } })),
        React.createElement("div", { className: "action-btn__content ".concat(animationClass, " ").concat(noAnimation) }, children ? (children) : (React.createElement(Icon, { name: iconName || '', size: iconSize || size * 0.6 })))));
};
export default ActionButton;
