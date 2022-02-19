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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Input = function (_a) {
    var value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, name = _a.name, id = _a.id, className = _a.className, label = _a.label, _b = _a.maxWidth, maxWidth = _b === void 0 ? "400px" : _b, rest = __rest(_a, ["value", "placeholder", "onChange", "name", "id", "className", "label", "maxWidth"]);
    var labelRef = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(0), legendWidth = _c[0], setLegendWidth = _c[1];
    var _d = (0, react_1.useState)(false), isInFocus = _d[0], setIsInFocus = _d[1];
    var styles = {
        maxWidth: maxWidth,
    };
    (0, react_1.useEffect)(function () {
        if (labelRef.current) {
            setLegendWidth(labelRef.current.offsetWidth);
        }
    }, []);
    var labelClass = (0, classnames_1.default)("neat-input__label", {
        "neat-input__label--with-content": value.length,
    });
    var width = isInFocus || value.length ? "".concat(legendWidth, "px") : "0px";
    return (react_1.default.createElement("fieldset", { className: "neat-input ".concat(className), style: styles },
        label && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("legend", { style: { width: width } }),
            react_1.default.createElement("label", { ref: labelRef, className: labelClass }, label))),
        react_1.default.createElement("input", __assign({ className: "neat-input__input", placeholder: placeholder, value: value, onChange: onChange, name: name, id: id, onBlur: function () { return setIsInFocus(false); }, onFocus: function () { return setIsInFocus(true); } }, rest))));
};
exports.default = Input;
