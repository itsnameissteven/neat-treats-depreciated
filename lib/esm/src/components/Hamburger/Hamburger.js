import React, { useState, useEffect } from "react";
import classnames from "classnames";
var Hamburger = function (_a) {
    var _b, _c, _d, _e, _f;
    var _g = _a.size, size = _g === void 0 ? "30px" : _g, className = _a.className, onClick = _a.onClick, _h = _a.pipes, pipes = _h === void 0 ? 3 : _h, _j = _a.animationTime, animationTime = _j === void 0 ? "400ms" : _j, color = _a.color, zIndex = _a.zIndex, position = _a.position;
    var _k = useState(false), isClicked = _k[0], setIsClicked = _k[1];
    var _l = useState(true), firstRender = _l[0], setFirstRender = _l[1];
    var topClass = classnames((_b = {},
        _b["animate-top"] = isClicked,
        _b["hamburger__top"] = !firstRender && !isClicked,
        _b));
    var middleClass = classnames((_c = {},
        _c["animate-middle"] = isClicked,
        _c["hamburger__middle"] = !firstRender && !isClicked,
        _c));
    var bottomClass = classnames((_d = {},
        _d["animate-bottom"] = isClicked,
        _d["hamburger__bottom"] = !firstRender && !isClicked,
        _d));
    var topClassTwoPipe = classnames((_e = {},
        _e["animate-top--two"] = isClicked,
        _e["hamburger__top--two"] = !firstRender && !isClicked,
        _e));
    var bottomClassTwoPipe = classnames((_f = {},
        _f["animate-bottom--two"] = isClicked,
        _f["hamburger__bottom--two"] = !firstRender && !isClicked,
        _f));
    useEffect(function () {
        if (isClicked) {
            setFirstRender(false);
        }
    }, [isClicked]);
    var passedClick = function () {
        setIsClicked(!isClicked);
        onClick && onClick();
    };
    var _m = position || {}, top = _m.top, left = _m.left, right = _m.right;
    var styles = {
        fill: color,
        zIndex: zIndex,
        top: top,
        left: left,
        right: right,
    };
    var animationDuration = animationTime;
    if (pipes === 2) {
        return (React.createElement("svg", { className: "hamburger ".concat(className), width: size, height: size, style: styles, onClick: passedClick, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("rect", { className: topClassTwoPipe, x: "2", y: "14", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
            React.createElement("rect", { className: bottomClassTwoPipe, x: "2", y: "28", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } })));
    }
    return (React.createElement("svg", { className: "hamburger ".concat(className), viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", width: size, height: size, style: styles, onClick: passedClick },
        React.createElement("rect", { className: topClass, x: "2", y: "6", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
        React.createElement("rect", { className: middleClass, x: "2", y: "21", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } }),
        React.createElement("rect", { className: bottomClass, x: "2", y: "36", width: "44", height: "6", rx: "3", fill: "black", style: { animationDuration: animationDuration } })));
};
export default Hamburger;
