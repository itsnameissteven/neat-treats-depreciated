"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var useCopyText = function (_a) {
    var _b = _a.transitionDuration, transitionDuration = _b === void 0 ? 400 : _b, styles = _a.styles, className = _a.className;
    var _c = (0, react_1.useState)(false), isCopied = _c[0], setIsCopied = _c[1];
    (0, react_1.useEffect)(function () {
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
    var textClass = (0, classnames_1.default)("use-copy-text-msg", {
        "use-copy-text-msg--unhide": isCopied,
    }, className);
    var showMessage = function () {
        var copyStyle = { transitionDuration: "".concat(transitionDuration, "ms") };
        return (react_1.default.createElement("p", { className: textClass, style: __assign(__assign({}, copyStyle), styles) }, "Copied!"));
    };
    return {
        copyText: copyText,
        isCopied: isCopied,
        showMessage: showMessage,
    };
};
exports.default = useCopyText;
