import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay = 500) => {
  const [deboucedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return deboucedValue;
};

export default useDebounce;
