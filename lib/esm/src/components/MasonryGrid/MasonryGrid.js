import React, { useState, useEffect, cloneElement, Children } from "react";
import "./MasonryGrid.scss";
var MasonryGrid = function (_a) {
    var children = _a.children;
    var _b = useState(0), width = _b[0], setWidth = _b[1];
    var StyledChildren = function () {
        return Children.map(children, function (child) {
            return cloneElement(child, {
                className: child.props.className + " masonry-grid__child",
            });
        });
    };
    useEffect(function () {
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
                child.style.cssText += "\n          grid-row: span " + rowSpan + ";\n          height: auto;\n          opacity: 1;\n        ";
            }
        };
        handleChildResize();
    }, [width]);
    return React.createElement("div", { className: "masonry-grid" }, StyledChildren());
};
export default MasonryGrid;
