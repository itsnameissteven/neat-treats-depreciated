import { useEffect } from "react";

const useBodyLock = (locked = false) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (!locked) {
      return document.body.classList.remove("overflow-hidden");
    }
    return document.body.classList.add("overflow-hidden");
  }, [locked]);

  return;
};

export default useBodyLock;
