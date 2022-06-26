import React from 'react';
import classnames from 'classnames';
import { usePreventAnimation } from '../../hooks';
var Hamburger = function (_a) {
    var _b = _a.size, size = _b === void 0 ? '30px' : _b, className = _a.className, onClick = _a.onClick, _c = _a.pipes, pipes = _c === void 0 ? 3 : _c, _d = _a.animationTime, animationTime = _d === void 0 ? '400ms' : _d, color = _a.color, zIndex = _a.zIndex, position = _a.position, isActive = _a.isActive;
    var noAnimation = usePreventAnimation().noAnimation;
    var topClass = classnames('hamburger__top', {
        'animate-top': isActive,
    });
    var middleClass = classnames(' hamburger__middle', {
        'animate-middle': isActive,
    });
    var bottomClass = classnames('hamburger__bottom', {
        'animate-bottom': isActive,
    });
    var topClassTwoPipe = classnames('hamburger__top--two', {
        'animate-top--two': isActive,
    });
    var bottomClassTwoPipe = classnames('hamburger__bottom--two', {
        'animate-bottom--two': isActive,
    });
    var _e = position || {}, top = _e.top, left = _e.left, right = _e.right;
    var styles = {
        fill: color,
        zIndex: zIndex,
        top: top,
        left: left,
        right: right,
    };
    var animationDuration = animationTime;
    if (pipes === 2) {
        return (React.createElement("svg", { className: "hamburger ".concat(className, " ").concat(noAnimation), width: size, height: size, style: styles, onClick: onClick, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("rect", { className: topClassTwoPipe, x: "2", y: "14", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
            React.createElement("rect", { className: bottomClassTwoPipe, x: "2", y: "28", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } })));
    }
    return (React.createElement("svg", { className: "hamburger ".concat(className, " ").concat(noAnimation), viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, style: styles, onClick: onClick },
        React.createElement("rect", { className: topClass, x: "2", y: "6", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
        React.createElement("rect", { className: middleClass, x: "2", y: "21", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
        React.createElement("rect", { className: bottomClass, x: "2", y: "36", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } })));
};
export default Hamburger;
