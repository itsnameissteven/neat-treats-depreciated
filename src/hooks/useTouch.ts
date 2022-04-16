import { useState, TouchEvent } from "react";

const useTouch = () => {
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [isSwipeActive, setIsSwipeActive] = useState(false);

  const onSwipeStart = (e: TouchEvent<any>) => {
    setStartPosition(e.targetTouches[0].clientX);
  };

  const onSwipeMove = (e: TouchEvent<any>) => {
    setIsSwipeActive(true);
    setSwipeDistance(e.targetTouches[0].clientX - startPosition);
  };
  const onSwipeEnd = () => {
    setStartPosition(0);
    setSwipeDistance(0);
    setIsSwipeActive(false);
  };
  return {
    startPosition,
    setStartPosition,
    endPosition,
    setEndPosition,
    swipeDistance,
    setSwipeDistance,
    isSwipeActive,
    setIsSwipeActive,
    onSwipeStart,
    onSwipeEnd,
    onSwipeMove,
  };
};

export default useTouch;
