import { useEffect, useRef } from "react";
import useIncrementingNumber from "./useIncrementingNumber";
import range from "../utils/range";
import generateId from "../utils/generateId";

const rainbowColors = [
  "hsl(1deg, 96%, 55%)",
  "hsl(25deg, 100%, 50%)",
  "hsl(40deg, 100%, 50%)",
  "hsl(45deg, 100%, 50%)",
  "hsl(66deg, 100%, 45%)",
  "hsl(130deg, 100%, 40%)",
  "hsl(177deg, 100%, 35%)",
  "hsl(230deg, 100%, 45%)",
  "hsl(240deg, 100%, 45%)",
  "hsl(260deg, 100%, 55%)",
  "hsl(325deg, 100%, 48%)",
];

const paletteSize = rainbowColors.length;
const WINDOW_SIZE = 3;

const hasBrowserSupport =
  typeof window !== "undefined"
    ? // @ts-ignore
      typeof window.CSS.registerProperty === "function"
    : false;

const getColorPropName = (id: string, index: number) =>
  `--magic-rainbow-color-${id}-${index}`;

const useRainbow = ({ intervalDelay = 2000 }) => {
  const prefersReducedMotion =
    typeof window === "undefined"
      ? true
      : window.matchMedia("(prefers-reduced-motion: no-preference)");

  // @ts-ignore
  const isEnabled = hasBrowserSupport && prefersReducedMotion.matches;

  const { current: uniqueId } = useRef(generateId());

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    range(0, WINDOW_SIZE).map((index) => {
      const name = getColorPropName(uniqueId, index);
      const initialValue = rainbowColors[index];
      // @ts-ignore
      return CSS.registerProperty({
        name,
        initialValue,
        syntax: `<color>`,
        inherits: false,
      });
    });
  }, [WINDOW_SIZE, isEnabled]);

  const intervalCount = useIncrementingNumber(intervalDelay);

  return range(0, WINDOW_SIZE).reduce((acc, index) => {
    const effectiveIntervalCount = isEnabled ? intervalCount : 0;
    const name = getColorPropName(uniqueId, index);
    const value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];

    return {
      ...acc,
      [name]: value,
    };
  }, {});
};

export default useRainbow;
