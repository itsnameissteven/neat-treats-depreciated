import { useEffect, useRef } from 'react';

const useOnOutsideClick = (ref: any, handler: any) => {
  const callbackRef = useRef(handler);
  const callback = callbackRef.current;

  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
};

export default useOnOutsideClick;
