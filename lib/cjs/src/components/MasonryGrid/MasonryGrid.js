"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var MasonryGrid = function (_a) {
    var children = _a.children, _b = _a.minWidth, minWidth = _b === void 0 ? 750 : _b, _c = _a.maxWidth, maxWidth = _c === void 0 ? 1200 : _c;
    var _d = (0, react_1.useState)(0), width = _d[0], setWidth = _d[1];
    var StyledChildren = function () {
        return react_1.Children.map(children, function (child) {
            return (0, react_1.cloneElement)(child, {
                className: "".concat(child.props.className, " masonry-grid__child"),
            });
        });
    };
    (0, react_1.useEffect)(function () {
        var innerWidth = window.innerWidth;
        var handleResize = function () {
            if (innerWidth < maxWidth && innerWidth > minWidth) {
                return;
            }
            setWidth(innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    (0, react_1.useEffect)(function () {
        var handleChildResize = function () {
            var elements = Array.from(document.getElementsByClassName("masonry-grid__child"));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var child = elements_1[_i];
                child.style.height = "fit-content";
                var height = window
                    .getComputedStyle(child)
                    .getPropertyValue("height");
                var rowSpan = Math.round(parseInt(height, 10) / 40) + 1;
                child.style.cssText += "\n          grid-row: span ".concat(rowSpan, ";\n          height: auto;\n          opacity: 1;\n        ");
            }
        };
        handleChildResize();
    }, [width]);
    return react_1.default.createElement("div", { className: "masonry-grid" }, StyledChildren());
};
exports.default = MasonryGrid;
