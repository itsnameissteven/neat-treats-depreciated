"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __importDefault(require("./random"));
var generateSparkle = function (_a) {
    var color = _a.color, _b = _a.minSize, minSize = _b === void 0 ? 10 : _b, _c = _a.maxSize, maxSize = _c === void 0 ? 20 : _c;
    var sparkle = {
        id: String((0, random_1.default)(10000, 99999)),
        createdAt: Date.now(),
        color: color,
        size: (0, random_1.default)(minSize, maxSize),
        style: {
            top: (0, random_1.default)(0, 100) + "%",
            left: (0, random_1.default)(-3, 98) + "%",
        },
    };
    return sparkle;
};
exports.default = generateSparkle;
