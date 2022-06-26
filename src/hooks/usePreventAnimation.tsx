import { useState, useEffect } from 'react';

const usePreventAnimation = (timeout: number = 500) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), timeout);
  }, []);

  return {
    isLoaded,
    noAnimation: !isLoaded ? 'no-animation' : '',
    noTransition: !isLoaded ? 'no-transition' : '',
  };
};

export default usePreventAnimation;
