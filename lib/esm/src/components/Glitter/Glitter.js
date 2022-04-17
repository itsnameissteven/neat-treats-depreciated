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
import React, { useState } from "react";
import generateSparkle from "../../utils/generateSparkle";
import SparkleInstance from "../GlitterInstance/GlitterInstance";
import styled from "styled-components";
import useRandomInterval from "../../hooks/useRandomInterval";
import range from "../../utils/range";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import randomColor from "randomcolor";
var Glitter = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#FFC700" : _b, _c = _a.rainbow, rainbow = _c === void 0 ? false : _c, children = _a.children, _d = _a.minSize, minSize = _d === void 0 ? 10 : _d, _e = _a.maxSize, maxSize = _e === void 0 ? 20 : _e, delegated = __rest(_a, ["color", "rainbow", "children", "minSize", "maxSize"]);
    var _f = useState(function () {
        return range(3).map(function () { return generateSparkle({ color: color, minSize: minSize, maxSize: maxSize }); });
    }), sparkles = _f[0], setSparkles = _f[1];
    var prefersReducedMotion = usePrefersReducedMotion();
    useRandomInterval(function () {
        var now = Date.now();
        var newColor = rainbow ? randomColor() : color;
        var sparkle = generateSparkle({ color: newColor, minSize: minSize, maxSize: maxSize });
        var nextSparkles = sparkles.filter(function (sp) {
            var delta = now - sp.createdAt;
            return delta < 750;
        });
        nextSparkles.push(sparkle);
        setSparkles(nextSparkles);
    }, prefersReducedMotion ? null : 400, prefersReducedMotion ? null : 1000);
    return (React.createElement(Wrapper, __assign({}, delegated),
        sparkles.map(function (sparkle) { return (React.createElement(SparkleInstance, { key: sparkle.id, color: sparkle.color, size: sparkle.size, style: sparkle.style })); }),
        React.createElement(ChildWrapper, null, children)));
};
var Wrapper = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var ChildWrapper = styled.strong(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n  font-weight: bold;\n"], ["\n  position: relative;\n  z-index: 1;\n  font-weight: bold;\n"])));
export default Glitter;
var templateObject_1, templateObject_2;
