import React, { useState, useEffect, cloneElement, Children } from "react";
var MasonryGrid = function (_a) {
    var children = _a.children, _b = _a.minWidth, minWidth = _b === void 0 ? 750 : _b, _c = _a.maxWidth, maxWidth = _c === void 0 ? 1200 : _c;
    var _d = useState(0), width = _d[0], setWidth = _d[1];
    var StyledChildren = function () {
        return Children.map(children, function (child) {
            return cloneElement(child, {
                className: "".concat(child.props.className, " masonry-grid__child"),
            });
        });
    };
    useEffect(function () {
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
    useEffect(function () {
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
    return React.createElement("div", { className: "masonry-grid" }, StyledChildren());
};
export default MasonryGrid;
