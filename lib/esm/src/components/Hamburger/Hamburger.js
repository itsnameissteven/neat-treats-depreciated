import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./Hamburger.scss";
var Hamburger = function (_a) {
    var _b, _c, _d;
    var _e = _a.size, size = _e === void 0 ? "40px" : _e, className = _a.className, handleClick = _a.handleClick, isActive = _a.isActive, _f = _a.pipes, pipes = _f === void 0 ? 3 : _f, _g = _a.animationTime, animationTime = _g === void 0 ? "400ms" : _g, color = _a.color, zIndex = _a.zIndex, position = _a.position;
    var _h = useState(false), isClicked = _h[0], setIsClicked = _h[1];
    var _j = useState(true), firstRender = _j[0], setFirstRender = _j[1];
    var topClass = classnames((_b = {},
        _b["animate-top"] = isActive,
        _b["hamburger__top"] = !firstRender && !isActive,
        _b));
    var middleClass = classnames((_c = {},
        _c["animate-middle"] = isActive,
        _c["hamburger__middle"] = !firstRender && !isActive,
        _c));
    var bottomClass = classnames((_d = {},
        _d["animate-bottom"] = isActive,
        _d["hamburger__bottom"] = !firstRender && !isActive,
        _d));
    useEffect(function () {
        if (isClicked) {
            setFirstRender(false);
        }
    }, [isClicked]);
    var passedClick = function () {
        if (handleClick) {
            handleClick();
            setFirstRender(false);
        }
        else {
            setIsClicked(!isClicked);
        }
    };
    var _k = position || {}, top = _k.top, left = _k.left, right = _k.right;
    var styles = {
        fill: color,
        zIndex: zIndex,
        top: top,
        left: left,
        right: right,
    };
    var animationDuration = animationTime;
    return (React.createElement("svg", { className: "hamburger " + className, viewBox: "0 0 110 100", width: size, height: size, style: styles, onClick: passedClick },
        pipes === 3 && (React.createElement("rect", { className: topClass, width: "110", height: "16", rx: "8", style: { animationDuration: animationDuration } })),
        React.createElement("rect", { className: middleClass, y: "40", width: "110", height: "16", rx: "8", style: { animationDuration: animationDuration } }),
        React.createElement("rect", { className: bottomClass, y: "80", width: "110", height: "16", rx: "8", style: { animationDuration: animationDuration } })));
};
export default Hamburger;
