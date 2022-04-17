"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var random = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.default = random;
