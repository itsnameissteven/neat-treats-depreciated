import { useEffect } from "react";

const useBodyLock = (locked = false) => {
  if (typeof window === "undefined") {
    return null;
  }
  useEffect(() => {
    if (!locked) {
      return document.body.classList.add("overflow-hidden");
    }
    return document.body.classList.remove("overflow-hidden");
  }, [locked]);

  return;
};

export default useBodyLock;
