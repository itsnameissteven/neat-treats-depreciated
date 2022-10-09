"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useBodyLock = function (locked) {
    if (locked === void 0) { locked = false; }
    (0, react_1.useEffect)(function () {
        if (typeof window === 'undefined') {
            return;
        }
        if (!locked) {
            return document.body.classList.remove('overflow-hidden');
        }
        return document.body.classList.add('overflow-hidden');
    }, [locked]);
    return;
};
exports.default = useBodyLock;
