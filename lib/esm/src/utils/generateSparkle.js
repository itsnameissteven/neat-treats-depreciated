import random from "./random";
var generateSparkle = function (_a) {
    var color = _a.color, _b = _a.minSize, minSize = _b === void 0 ? 10 : _b, _c = _a.maxSize, maxSize = _c === void 0 ? 20 : _c;
    var sparkle = {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        color: color,
        size: random(minSize, maxSize),
        style: {
            top: random(0, 100) + "%",
            left: random(-3, 98) + "%",
        },
    };
    return sparkle;
};
export default generateSparkle;
