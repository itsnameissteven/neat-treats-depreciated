import { useRef } from 'react';
var useDynamicRefs = function () {
    var refs = useRef({});
    var setRef = function (element, key) {
        refs.current[key] = element;
    };
    var scrollToRef = function (key, options) {
        var _a, _b;
        if (options === void 0) { options = {
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        }; }
        (_b = (_a = refs === null || refs === void 0 ? void 0 : refs.current) === null || _a === void 0 ? void 0 : _a[key]) === null || _b === void 0 ? void 0 : _b.scrollIntoView(options);
    };
    var scrollToTop = function (key, options) {
        var _a;
        if (options === void 0) { options = {
            top: 0,
            left: 0,
            behavior: 'smooth',
        }; }
        (_a = refs === null || refs === void 0 ? void 0 : refs.current) === null || _a === void 0 ? void 0 : _a[key].scrollTo(options);
    };
    return {
        refs: refs,
        setRef: setRef,
        scrollToRef: scrollToRef,
        scrollToTop: scrollToTop,
    };
};
export default useDynamicRefs;
