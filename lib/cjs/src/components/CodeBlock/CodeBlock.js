"use strict";
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
var prismjs_1 = __importDefault(require("prismjs"));
var __1 = require("..");
var hooks_1 = require("../../hooks");
var CodeBlock = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, code = _a.code, language = _a.language;
    var _c = (0, hooks_1.useCopyText)({}), copyText = _c.copyText, showMessage = _c.showMessage;
    (0, react_1.useEffect)(function () {
        prismjs_1.default.highlightAll();
    }, []);
    return (react_1.default.createElement("div", { className: "code code-block ".concat(className) },
        react_1.default.createElement("div", { className: "code-block__copy" },
            showMessage(),
            react_1.default.createElement(__1.Icon, { className: "code-block__copy__icon", name: "copy", size: 34, onClick: function () { return copyText(code); } })),
        react_1.default.createElement("pre", null,
            react_1.default.createElement("code", { className: "language-".concat(language) }, code))));
};
exports.default = CodeBlock;
