var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Icon } from "..";
var Carousel = function (_a) {
    var _b = _a.slides, slides = _b === void 0 ? [React.createElement("h1", null, "hi")] : _b;
    var _c = useState(slides), slidePanels = _c[0], setSlidePanels = _c[1];
    var _d = useState(""), direction = _d[0], setDirection = _d[1];
    var slideClassNames = classNames({
        carousel__slide__content: true,
        "carousel__slide__content--left": direction === "left",
        "carousel__slide__content--right": direction === "right",
    });
    var allSlides = slidePanels.map(function (slide, i) {
        return (React.createElement("div", { className: "carousel__slide", key: i },
            React.createElement("div", { className: slideClassNames }, slide)));
    });
    useEffect(function () {
        if (direction === "right") {
            var resetDirection_1 = setTimeout(function () {
                // fix this to reset state
                slidePanels.shift();
                setDirection("");
            }, 1000);
            return function () { return clearTimeout(resetDirection_1); };
        }
        if (direction === "left") {
            var resetDirection_2 = setTimeout(function () {
                setDirection("");
            }, 1000);
            return function () { return clearTimeout(resetDirection_2); };
        }
        return;
    }, [direction]);
    var onNext = function () {
        setDirection("");
        setDirection("right");
        setSlidePanels(function (slides) { return __spreadArray(__spreadArray([], slides, true), [slides[0]], false); });
    };
    var onPrev = function () {
        setDirection("");
        setDirection("left");
        var lastSlide = slidePanels.pop();
        if (lastSlide) {
            setSlidePanels(function (slides) { return __spreadArray([lastSlide], slides, true); });
        }
    };
    return (React.createElement("div", { className: "carousel" },
        React.createElement(Icon, { className: "carousel__prev", name: "chevron-left", onClick: onPrev, disabled: direction.length > 0 }),
        allSlides,
        React.createElement(Icon, { className: "carousel__next", name: "chevron-right", onClick: onNext, disabled: direction.length > 0 })));
};
export default Carousel;
