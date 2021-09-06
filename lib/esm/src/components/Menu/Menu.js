import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./Menu.scss";
var Menu = function (_a) {
    var _b, _c;
    var isOpen = _a.isOpen, children = _a.children, handleClose = _a.handleClose, _d = _a.width, width = _d === void 0 ? "225px" : _d, _e = _a.position, position = _e === void 0 ? "left" : _e, _f = _a.heightFromTop, heightFromTop = _f === void 0 ? "50px" : _f, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? "#fff" : _g, boxShadow = _a.boxShadow, style = _a.style, _h = _a.containerColor, containerColor = _h === void 0 ? "#0505051c" : _h;
    var _j = useState(isOpen), canOpen = _j[0], setCanOpen = _j[1];
    var styles = {
        width: width,
        top: heightFromTop,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
    };
    var containerClassName = classNames((_b = {
            menu: true
        },
        _b["menu-container-enter"] = isOpen,
        _b["menu-container-exit"] = !isOpen,
        _b));
    var slideOutClassName = classNames((_c = {},
        _c["menu__slide-out--" + position] = true,
        _c["menu__slide-out-enter--" + position] = isOpen,
        _c["menu__slide-out-exit--" + position] = !isOpen,
        _c));
    useEffect(function () {
        var delayOpen = setTimeout(function () {
            setCanOpen(isOpen);
        }, 400);
        if (isOpen) {
            setCanOpen(isOpen);
        }
        return function () { return clearTimeout(delayOpen); };
    }, [isOpen]);
    if (!canOpen) {
        return null;
    }
    return (React.createElement("div", { className: containerClassName, style: {
            backgroundColor: containerColor,
        }, onClick: handleClose },
        React.createElement("div", { className: slideOutClassName, style: style ? style : styles }, children)));
};
export default Menu;
