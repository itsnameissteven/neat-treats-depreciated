import { getTargetValue } from './interactionHandlers';
import { ChangeEvent } from 'react';

export const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
  return {
    value: getTargetValue(e),
    error: false,
  };
};
