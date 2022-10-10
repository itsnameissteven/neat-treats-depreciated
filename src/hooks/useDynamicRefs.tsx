import { useRef } from 'react';

interface IObject {
  [key: string]: any;
}

interface IScrollToArgs {
  key: string;
  options?: IObject;
}

const useDynamicRefs = () => {
  const refs = useRef<IObject>({});

  const setRef = (ref: any, key: string) => {
    refs.current[key] = ref;
  };

  const scrollToRef = ({
    key,
    options = { behavior: 'smooth', block: 'center', inline: 'center' },
  }: IScrollToArgs) => {
    refs?.current?.[key]?.scrollIntoView(options);
  };

  const scrollToTop = ({
    key,
    options = { top: 0, left: 0, behavior: 'smooth' },
  }: IScrollToArgs) => {
    refs?.current?.[key]?.scrollIntoView(options);
  };

  return {
    refs,
    setRef,
    scrollToRef,
    scrollToTop,
  };
};

export default useDynamicRefs;
