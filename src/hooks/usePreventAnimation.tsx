import { useState, useEffect } from 'react';

interface IPreventAnimation {
  timeout?: number;
  secondaryBoolean?: boolean;
}
const usePreventAnimation = ({
  timeout = 500,
  secondaryBoolean = false,
}: IPreventAnimation = {}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), timeout);
  }, [timeout]);

  return {
    isLoaded,
    noAnimation: !isLoaded || secondaryBoolean ? 'no-animation' : '',
    noTransition: !isLoaded || secondaryBoolean ? 'no-transition' : '',
  };
};

export default usePreventAnimation;
