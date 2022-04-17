"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var generateSparkle_1 = __importDefault(require("../../utils/generateSparkle"));
var GlitterInstance_1 = __importDefault(require("../GlitterInstance/GlitterInstance"));
var styled_components_1 = __importDefault(require("styled-components"));
var useRandomInterval_1 = __importDefault(require("../../hooks/useRandomInterval"));
var range_1 = __importDefault(require("../../utils/range"));
var usePrefersReducedMotion_1 = __importDefault(require("../../hooks/usePrefersReducedMotion"));
var randomcolor_1 = __importDefault(require("randomcolor"));
var Glitter = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#FFC700" : _b, _c = _a.rainbow, rainbow = _c === void 0 ? false : _c, children = _a.children, _d = _a.minSize, minSize = _d === void 0 ? 10 : _d, _e = _a.maxSize, maxSize = _e === void 0 ? 20 : _e, delegated = __rest(_a, ["color", "rainbow", "children", "minSize", "maxSize"]);
    var _f = (0, react_1.useState)(function () {
        return (0, range_1.default)(3).map(function () { return (0, generateSparkle_1.default)({ color: color, minSize: minSize, maxSize: maxSize }); });
    }), sparkles = _f[0], setSparkles = _f[1];
    var prefersReducedMotion = (0, usePrefersReducedMotion_1.default)();
    (0, useRandomInterval_1.default)(function () {
        var now = Date.now();
        var newColor = rainbow ? (0, randomcolor_1.default)() : color;
        var sparkle = (0, generateSparkle_1.default)({ color: newColor, minSize: minSize, maxSize: maxSize });
        var nextSparkles = sparkles.filter(function (sp) {
            var delta = now - sp.createdAt;
            return delta < 750;
        });
        nextSparkles.push(sparkle);
        setSparkles(nextSparkles);
    }, prefersReducedMotion ? null : 400, prefersReducedMotion ? null : 1000);
    return (react_1.default.createElement(Wrapper, __assign({}, delegated),
        sparkles.map(function (sparkle) { return (react_1.default.createElement(GlitterInstance_1.default, { key: sparkle.id, color: sparkle.color, size: sparkle.size, style: sparkle.style })); }),
        react_1.default.createElement(ChildWrapper, null, children)));
};
var Wrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var ChildWrapper = styled_components_1.default.strong(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n  font-weight: bold;\n"], ["\n  position: relative;\n  z-index: 1;\n  font-weight: bold;\n"])));
exports.default = Glitter;
var templateObject_1, templateObject_2;
