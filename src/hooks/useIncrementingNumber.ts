import { useEffect, useRef, useState } from "react";

const useIncrementingNumber = (delay: number) => {
  const [count, setCount] = useState(0);

  const savedCallback = useRef(() => setCount((c) => c + 1));

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return;
  }, [delay]);

  return count;
};

export default useIncrementingNumber;
