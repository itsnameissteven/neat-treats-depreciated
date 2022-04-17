import React, { useState } from "react";
import classnames from "classnames";
var Switch = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.height, height = _c === void 0 ? 25 : _c, _d = _a.background, background = _d === void 0 ? "black" : _d, _e = _a.ballColor, ballColor = _e === void 0 ? "white" : _e, onClick = _a.onClick;
    var _f = useState(false), on = _f[0], setOn = _f[1];
    var width = height * 2;
    var styles = {
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        outline: "".concat(height * 0.1, "px solid ").concat(background),
        background: background,
    };
    var ballClass = classnames("switch__ball", {
        "switch__ball--on": on,
        "switch__ball--off": !on,
    });
    var handleClick = function () {
        onClick && onClick();
        setOn(!on);
    };
    return (React.createElement("button", { className: "switch ".concat(className), onClick: handleClick, style: styles },
        React.createElement("span", { className: ballClass, style: { backgroundColor: ballColor } })));
};
export default Switch;
