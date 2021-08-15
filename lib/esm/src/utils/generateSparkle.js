import random from "./random";
var generateSparkle = function (color) {
    var sparkle = {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        color: color,
        size: random(10, 20),
        style: {
            top: random(0, 100) + "%",
            left: random(0, 100) + "%",
        },
    };
    return sparkle;
};
export default generateSparkle;
