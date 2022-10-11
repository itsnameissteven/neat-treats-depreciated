import { getTargetValue } from './interactionHandlers';
import { ChangeEvent } from 'react';
import { TFormComponent } from '../types';
import { objMap } from '.';

export interface IInputState extends TFormComponent {
  error: boolean;
}
export interface IFormInputs {
  [key: string]: IInputState;
}

export interface IFormState {
  form: IFormInputs;
  firstError: string | null;
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

export const getInitialFormState = (data: TFormComponent[]): IFormState => {
  const form = data.reduce((acc: IFormInputs, el) => {
    const { id } = el;
    acc[id] = {
      ...el,
      error: false,
    };
    return acc;
  }, {});
  return {
    form,
    firstError: null,
  };
};

export const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
  return {
    value: getTargetValue(e),
    error: false,
  };
};

export const formReducer = (state: IFormState, action: TFormAction) => {
  // return state
  switch (action.type) {
    case 'CHANGE':
      const { id, e } = action.payload;
      return {
        ...state,
        form: {
          ...state.form,
          [id]: {
            ...state.form[id],
            ...getInputValue(e),
          },
        },
        firstError: null,
      };
    case 'VALIDATE':
      let firstError: string | null = null;
      const getIsError = (val: IInputState) => {
        const isError = val.required ? !val.value : false;
        if (isError && !firstError) {
          firstError = val.id;
        }
        return {
          ...val,
          error: isError,
        };
      };
      return {
        form: objMap(state.form, getIsError),
        firstError,
      };
    default:
      return state;
  }
};
