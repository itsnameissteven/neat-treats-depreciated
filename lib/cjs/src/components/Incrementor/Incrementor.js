"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var Incrementor = function (_a) {
    var maxCount = _a.maxCount, _b = _a.minCount, minCount = _b === void 0 ? 0 : _b, _c = _a.width, width = _c === void 0 ? "32px" : _c, currentCount = _a.currentCount, onSubtract = _a.onSubtract, onAdd = _a.onAdd;
    return (react_1.default.createElement("div", { className: "incrementor" },
        react_1.default.createElement(__1.Icon, { color: "#343a40ff", disabled: currentCount === minCount, name: "minus-circle", onClick: onSubtract, size: 20 }),
        react_1.default.createElement("div", { className: "incrementor__count", style: { width: width } }, currentCount),
        react_1.default.createElement(__1.Icon, { color: "#343a40ff", disabled: currentCount === maxCount, name: "plus-circle", onClick: onAdd, size: 20 })));
};
exports.default = Incrementor;
