"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __importDefault(require("./random"));
var generateSparkle = function (color) {
    var sparkle = {
        id: String((0, random_1.default)(10000, 99999)),
        createdAt: Date.now(),
        color: color,
        size: (0, random_1.default)(10, 20),
        style: {
            top: (0, random_1.default)(-50, 75) + "%",
            left: (0, random_1.default)(-3, 98) + "%",
        },
    };
    return sparkle;
};
exports.default = generateSparkle;
