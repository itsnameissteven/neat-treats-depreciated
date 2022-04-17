"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = exports.random = exports.calculateTrajectory = void 0;
var calculateTrajectory_1 = require("./calculateTrajectory");
Object.defineProperty(exports, "calculateTrajectory", { enumerable: true, get: function () { return calculateTrajectory_1.calculateTrajectory; } });
var random_1 = __importDefault(require("./random"));
exports.random = random_1.default;
var range_1 = __importDefault(require("./range"));
exports.range = range_1.default;
