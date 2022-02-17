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
var __1 = require("..");
var Carousel = function (_a) {
    var _b = _a.slides, slides = _b === void 0 ? [react_1.default.createElement("h1", null, "hi")] : _b;
    var _c = (0, react_1.useState)(slides), slidePanels = _c[0], setSlidePanels = _c[1];
    var _d = (0, react_1.useState)(""), direction = _d[0], setDirection = _d[1];
    var slideClassNames = (0, classnames_1.default)({
        carousel__slide__content: true,
        "carousel__slide__content--left": direction === "left",
        "carousel__slide__content--right": direction === "right",
    });
    var allSlides = slidePanels.map(function (slide, i) {
        return (react_1.default.createElement("div", { className: "carousel__slide", key: i },
            react_1.default.createElement("div", { className: slideClassNames }, slide)));
    });
    (0, react_1.useEffect)(function () {
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
    return (react_1.default.createElement("div", { className: "carousel" },
        react_1.default.createElement(__1.Icon, { className: "carousel__prev", name: "chevron-left", onClick: onPrev, disabled: direction.length > 0 }),
        allSlides,
        react_1.default.createElement(__1.Icon, { className: "carousel__next", name: "chevron-right", onClick: onNext, disabled: direction.length > 0 })));
};
exports.default = Carousel;
