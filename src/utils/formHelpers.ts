import { getTargetValue } from './interactionHandlers';
import { ChangeEvent } from 'react';
import { TFormComponent } from '../types';
import { objMap } from '.';

export interface IInputState {
  value: string;
  required?: boolean;
  error: boolean;
}
export interface IInitialFormState {
  [key: string]: IInputState;
}

export type TFormAction =
  | {
      type: 'CHANGE';
      payload: {
        id: string;
        e: ChangeEvent<HTMLInputElement>;
      };
    }
  | { type: 'VALIDATE' };

export const getInitialFormState = (data: TFormComponent[]) => {
  return data.reduce((acc: IInitialFormState, el) => {
    const { id, value, required } = el;
    acc[id] = {
      required,
      value,
      error: false,
    };
    return acc;
  }, {});
};

export const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
  return {
    value: getTargetValue(e),
    error: false,
  };
};

export const formReducer = (state: IInitialFormState, action: TFormAction) => {
  // return state
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...getInputValue(action.payload.e),
        },
      };
    case 'VALIDATE':
      const getIsError = (val: IInputState) => {
        return {
          ...val,
          error: val.required ? !val.value : false,
        };
      };
      return objMap(state, getIsError);
    default:
      return state;
  }
};
