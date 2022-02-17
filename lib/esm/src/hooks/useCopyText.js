var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useEffect } from "react";
import classnames from "classnames";
var useCopyText = function (_a) {
    var _b = _a.transitionDuration, transitionDuration = _b === void 0 ? 400 : _b, styles = _a.styles, className = _a.className;
    var _c = useState(false), isCopied = _c[0], setIsCopied = _c[1];
    useEffect(function () {
        if (isCopied) {
            var hideMessage_1 = setTimeout(function () { return setIsCopied(false); }, transitionDuration);
            return function () { return clearTimeout(hideMessage_1); };
        }
        return;
    });
    // Pass the text you would like to copy.
    var copyText = function (text) {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
    };
    var textClass = classnames("use-copy-text-msg", {
        "use-copy-text-msg--unhide": isCopied,
    }, className);
    var showMessage = function () {
        var copyStyle = { transitionDuration: "".concat(transitionDuration, "ms") };
        return (React.createElement("p", { className: textClass, style: __assign(__assign({}, copyStyle), styles) }, "Copied!"));
    };
    return {
        copyText: copyText,
        isCopied: isCopied,
        showMessage: showMessage,
    };
};
export default useCopyText;
