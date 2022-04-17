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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var hooks_1 = require("../../hooks");
var __1 = require("..");
var Carousel = function (_a) {
    var _b = _a.transitionTime, transitionTime = _b === void 0 ? 300 : _b, _c = _a.iconColor, iconColor = _c === void 0 ? "#fff" : _c, _d = _a.iconSize, iconSize = _d === void 0 ? 34 : _d, children = _a.children, _e = _a.iconPrev, iconPrev = _e === void 0 ? "chevron-left" : _e, _f = _a.iconNext, iconNext = _f === void 0 ? "chevron-right" : _f, _g = _a.className, className = _g === void 0 ? "" : _g;
    var slidePanels = (0, react_1.useMemo)(function () {
        var newChildren = react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, { width: "100%" });
        });
        var firstSlide = newChildren[0];
        var lastSlide = newChildren[newChildren.length - 1];
        return __spreadArray(__spreadArray([lastSlide], newChildren, true), [firstSlide], false);
    }, [children]);
    var _h = (0, react_1.useState)(1), activeIndex = _h[0], setActiveIndex = _h[1];
    var _j = (0, react_1.useState)(false), isDisabled = _j[0], setIsDisabled = _j[1];
    var _k = (0, react_1.useState)(false), isNoTransition = _k[0], setIsNoTransition = _k[1];
    var _l = (0, hooks_1.useTouch)(), onSwipeStart = _l.onSwipeStart, onSwipeEnd = _l.onSwipeEnd, onSwipeMove = _l.onSwipeMove, isSwipeActive = _l.isSwipeActive, swipeDistance = _l.swipeDistance;
    var slideClass = (0, classnames_1.default)("carousel__slide", {
        "no-transition": isNoTransition,
    });
    var allSlides = slidePanels.map(function (slide, i) {
        return (react_1.default.createElement("div", { className: "carousel__slide__item", key: i }, slide));
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
    return (react_1.default.createElement("div", { className: "carousel ".concat(className) },
        react_1.default.createElement(__1.Icon, { className: "carousel__prev", name: iconPrev, onClick: function () { return handleClick(-1); }, disabled: isDisabled, color: iconColor, size: iconSize }),
        react_1.default.createElement("div", { onTransitionEnd: resetlocation, onTouchStart: onSwipeStart, onTouchMove: onSwipeMove, onTouchEnd: handleSwipe, className: slideClass, style: {
                transform: transform,
                transitionDuration: "".concat(transitionTime, "ms"),
            } }, allSlides),
        react_1.default.createElement(__1.Icon, { className: "carousel__next", name: iconNext, onClick: function () { return handleClick(1); }, disabled: isDisabled, color: iconColor, size: iconSize })));
};
exports.default = Carousel;
