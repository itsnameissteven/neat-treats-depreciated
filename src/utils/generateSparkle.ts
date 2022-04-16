import random from "./random";

interface IArgs {
  color: string;
  minSize?: number;
  maxSize?: number;
}

const generateSparkle = ({ color, minSize = 10, maxSize = 20 }: IArgs) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(minSize, maxSize),
    style: {
      top: random(0, 100) + "%",
      left: random(-3, 98) + "%",
    },
  };
  return sparkle;
};

export default generateSparkle;
