import React, { useEffect } from "react";
import Prism from "prismjs";
import { Icon } from "..";
import { useCopyText } from "../../hooks";
var CodeBlock = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, code = _a.code, language = _a.language;
    var _c = useCopyText({}), copyText = _c.copyText, showMessage = _c.showMessage;
    useEffect(function () {
        Prism.highlightAll();
    }, []);
    return (React.createElement("div", { className: "code code-block ".concat(className) },
        React.createElement("div", { className: "code-block__copy" },
            showMessage(),
            React.createElement(Icon, { className: "code-block__copy__icon", name: "copy", size: 34, onClick: function () { return copyText(code); } })),
        React.createElement("pre", null,
            React.createElement("code", { className: "language-".concat(language) }, code))));
};
export default CodeBlock;
