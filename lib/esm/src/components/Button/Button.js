import React from "react";
import classnames from "classnames";
import "./Button.scss";
var Button = function (_a) {
    var _b;
    var _c = _a.type, type = _c === void 0 ? "primary" : _c, _d = _a.round, round = _d === void 0 ? false : _d, backgroundColor = _a.backgroundColor, children = _a.children, className = _a.className, onClick = _a.onClick;
    var btnClass = classnames((_b = {
            "nt-btn": true
        },
        _b["btn-" + type] = true,
        _b.round = round,
        _b));
    var style = type === "outline"
        ? { color: backgroundColor, borderColor: backgroundColor }
        : { backgroundColor: backgroundColor };
    return (React.createElement("button", { className: btnClass + " " + className, onClick: onClick, style: style }, children));
};
export default Button;