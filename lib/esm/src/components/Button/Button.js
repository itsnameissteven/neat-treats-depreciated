import React from 'react';
import classnames from 'classnames';
var Button = function (_a) {
    var _b;
    var _c = _a.type, type = _c === void 0 ? 'primary' : _c, _d = _a.round, round = _d === void 0 ? false : _d, backgroundColor = _a.backgroundColor, _e = _a.fancy, fancy = _e === void 0 ? false : _e, _f = _a.size, size = _f === void 0 ? 'medium' : _f, children = _a.children, className = _a.className, onClick = _a.onClick, disabled = _a.disabled;
    var btnClass = classnames((_b = {
            'nt-btn': true
        },
        _b["nt-btn__".concat(type)] = true,
        _b["nt-btn__".concat(size)] = true,
        _b.round = round,
        _b.fancy = fancy && type !== 'outline' && !round,
        _b['fancy-round'] = fancy && type !== 'outline' && round,
        _b));
    var style = type === 'outline'
        ? { color: backgroundColor, borderColor: backgroundColor }
        : { backgroundColor: backgroundColor };
    return (React.createElement("button", { className: "".concat(btnClass, " ").concat(className), onClick: onClick, style: style, disabled: disabled }, children));
};
export default Button;
