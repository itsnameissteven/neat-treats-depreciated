import React, { useEffect } from "react";
import { Icon } from "..";
import { useLocalStorage, usePreventAnimation } from "../../hooks";
var DarkModeButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, onClick = _a.onClick, offIcon = _a.offIcon, onIcon = _a.onIcon, _c = _a.size, size = _c === void 0 ? 50 : _c;
    var _d = useLocalStorage("dark-mode", true), isDark = _d[0], setIsDark = _d[1];
    var noTransition = usePreventAnimation().noTransition;
    useEffect(function () {
        if (isDark) {
            document.body.classList.add("dark-mode");
        }
        else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDark]);
    var handleClick = function () {
        setIsDark(!isDark);
        onClick && onClick();
    };
    var iconSize = size * 0.66;
    return (React.createElement("button", { className: "dark-mode-button ".concat(className), onClick: handleClick, style: {
            width: "".concat(size, "px"),
            height: "".concat(size, "px"),
        } },
        React.createElement("span", { className: "dark-mode-button__icon--light ".concat(noTransition) }, offIcon || React.createElement(Icon, { name: "sun", size: iconSize, color: "#1F2028" })),
        React.createElement("span", { className: "dark-mode-button__icon--dark ".concat(noTransition) }, onIcon || React.createElement(Icon, { name: "moon", size: iconSize, color: "#fff" }))));
};
export default DarkModeButton;
