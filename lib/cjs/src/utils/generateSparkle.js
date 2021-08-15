"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __importDefault(require("./random"));
var generateSparkle = function (color) {
    var sparkle = {
        id: String(random_1.default(10000, 99999)),
        createdAt: Date.now(),
        color: color,
        size: random_1.default(10, 20),
        style: {
            top: random_1.default(0, 100) + "%",
            left: random_1.default(0, 100) + "%",
        },
    };
    return sparkle;
};
exports.default = generateSparkle;
