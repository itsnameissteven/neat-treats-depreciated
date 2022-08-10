var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useMemo } from 'react';
import classnames from 'classnames';
import { useTouch } from '../../hooks';
import { Icon } from '..';
var Carousel = function (_a) {
    var _b = _a.transitionTime, transitionTime = _b === void 0 ? 300 : _b, _c = _a.iconColor, iconColor = _c === void 0 ? '#fff' : _c, _d = _a.iconSize, iconSize = _d === void 0 ? 34 : _d, children = _a.children, _e = _a.iconPrev, iconPrev = _e === void 0 ? 'chevron-left' : _e, _f = _a.iconNext, iconNext = _f === void 0 ? 'chevron-right' : _f, _g = _a.className, className = _g === void 0 ? '' : _g;
    var slidePanels = useMemo(function () {
        var newChildren = React.Children.map(children, function (child) {
            return React.cloneElement(child, { width: '100%' });
        });
        var firstSlide = newChildren[0];
        var lastSlide = newChildren[newChildren.length - 1];
        return __spreadArray(__spreadArray([lastSlide], newChildren, true), [firstSlide], false);
    }, [children]);
    var _h = useState(1), activeIndex = _h[0], setActiveIndex = _h[1];
    var _j = useState(false), isDisabled = _j[0], setIsDisabled = _j[1];
    var _k = useState(false), isNoTransition = _k[0], setIsNoTransition = _k[1];
    var _l = useTouch(), onSwipeStart = _l.onSwipeStart, onSwipeEnd = _l.onSwipeEnd, onSwipeMove = _l.onSwipeMove, isSwipeActive = _l.isSwipeActive, swipeDistance = _l.swipeDistance;
    var slideClass = classnames('carousel__slide', {
        'no-transition': isNoTransition,
    });
    var allSlides = slidePanels.map(function (slide, i) {
        return (React.createElement("div", { className: "carousel__slide__item", key: i }, slide));
    });
    var resetlocation = function () {
        setIsDisabled(false);
        if (activeIndex === 0) {
            setIsNoTransition(true);
            setActiveIndex(slidePanels.length - 2);
        }
        else if (activeIndex === slidePanels.length - 1) {
            setActiveIndex(1);
            setIsNoTransition(true);
        }
    };
    var handleClick = function (n) {
        setActiveIndex(activeIndex + n);
        setIsDisabled(true);
        setIsNoTransition(false);
    };
    var handleSwipe = function () {
        if (swipeDistance < -20) {
            handleClick(1);
        }
        else if (swipeDistance > 20) {
            handleClick(-1);
        }
        onSwipeEnd();
    };
    var transform = isSwipeActive
        ? "translateX(calc(-".concat(activeIndex * 100, "% + ").concat(swipeDistance, "px))")
        : "translateX(-".concat(activeIndex * 100, "%)");
    return (React.createElement("div", { className: "carousel ".concat(className) },
        React.createElement(Icon, { className: "carousel__prev", name: iconPrev, onClick: function () { return handleClick(-1); }, disabled: isDisabled, color: iconColor, size: iconSize }),
        React.createElement("div", { onTransitionEnd: resetlocation, onTouchStart: onSwipeStart, onTouchMove: onSwipeMove, onTouchEnd: handleSwipe, className: slideClass, style: {
                transform: transform,
                transitionDuration: "".concat(transitionTime, "ms"),
            } }, allSlides),
        React.createElement(Icon, { className: "carousel__next", name: iconNext, onClick: function () { return handleClick(1); }, disabled: isDisabled, color: iconColor, size: iconSize })));
};
export default Carousel;
