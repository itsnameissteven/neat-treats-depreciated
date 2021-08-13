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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./MasonryGrid.scss");
var MasonryGrid = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(0), width = _b[0], setWidth = _b[1];
    var StyledChildren = function () {
        return react_1.Children.map(children, function (child) {
            return react_1.cloneElement(child, {
                className: child.props.className + " masonry-grid__child",
            });
        });
    };
    react_1.useEffect(function () {
        var innerWidth = window.innerWidth;
        var handleResize = function () {
            if (innerWidth < 1200 && innerWidth > 750) {
                /* 1200 and 750 can be max/min width */
            }
            setWidth(innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    react_1.useEffect(function () {
        var handleChildResize = function () {
            var elements = Array.from(document.getElementsByClassName("masonry-grid__child"));
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var child = elements_1[_i];
                child.style.height = "fit-content";
                var height = window
                    .getComputedStyle(child)
                    .getPropertyValue("height");
                var rowSpan = Math.round(parseInt(height, 10) / 40) + 1;
                child.style.cssText += "\n          grid-row: span " + rowSpan + ";\n          height: auto;\n          opacity: 1;\n        ";
            }
        };
        handleChildResize();
    }, [width]);
    return react_1.default.createElement("div", { className: "masonry-grid" }, StyledChildren());
};
exports.default = MasonryGrid;
