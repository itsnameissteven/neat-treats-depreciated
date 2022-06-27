import { useRef } from 'react';

interface IObject {
  [key: string]: any
}

const useDynamicRefs = () => {
  const refs = useRef<IObject>({});

  const setRef = (element: any, key: string) => {
    refs.current[key] = element;
  };

  const scrollToRef = (
    key: string,
    options: IObject = {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    }
  ) => {
    refs?.current?.[key]?.scrollIntoView(options);
  };

  const scrollToTop = (
    key: string,
    options: IObject = {
      top: 0,
      left: 0,
      behavior: 'smooth',
    }
  ) => {
    refs?.current?.[key].scrollTo(options);
  };

  return {
    refs,
    setRef,
    scrollToRef,
    scrollToTop,
  };
};

export default useDynamicRefs;
