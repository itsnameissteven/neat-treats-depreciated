import random from "./random";

const generateSparkle = (color: string) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(-50, 75) + "%",
      left: random(-3, 98) + "%",
    },
  };
  return sparkle;
};

export default generateSparkle;
