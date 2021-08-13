import { useEffect, useRef, useCallback } from "react";
import random from "../utils/random";

type Delay = null | number;

const useRandomInterval = (
  callback: () => void,
  minDelay: Delay,
  maxDelay: Delay
) => {
  const timeoutId: React.MutableRefObject<Delay> = useRef(null);
  const savedCallBack = useRef(callback);

  useEffect(() => {
    savedCallBack.current = callback;
  });

  useEffect(() => {
    let isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";

    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay as number, maxDelay as number);

        timeoutId.current = window.setTimeout(() => {
          savedCallBack.current();
          handleTick();
        }, nextTickAt);
      };

      handleTick();
    }

    return () => window.clearTimeout(timeoutId.current as number);
  }, [minDelay, maxDelay]);

  const cancel = useCallback(() => {
    window.clearTimeout(timeoutId.current as number);
  }, []);

  return cancel;
};

export default useRandomInterval;
