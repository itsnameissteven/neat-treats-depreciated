import { getTargetValue } from './interactionHandlers';
import { ChangeEvent } from 'react';
import { TFormComponent } from '../types';
import { objMap } from '.';

export interface IInputState extends TFormComponent {
  isError: boolean;
  isTouched: boolean;
}
export interface IFormInputs {
  [key: string]: IInputState;
}

export interface IFormState {
  form: IFormInputs;
  formIsValid: boolean;
}

export type TFormAction =
  | {
      type: 'CHANGE';
      payload: {
        id: string;
        e: ChangeEvent<HTMLInputElement>;
      };
    }
  | { type: 'VALIDATE' }
  | {
      type: 'TOUCH';
      payload: {
        id: string;
      };
    };

export const getIsValid = (inputs: IFormInputs) => {
  return !Object.values(inputs).some((input) => input.isError);
};

export const touchAll = (input: IInputState) => {
  return { ...input, isTouched: true };
};

export const getInitialFormState = (data: TFormComponent[]): IFormState => {
  const form = data.reduce((acc: IFormInputs, el) => {
    const { id, required } = el;
    acc[id] = {
      ...el,
      isError: required === undefined ? false : !el.value.trim(),
      isTouched: false,
    };
    return acc;
  }, {});
  return {
    form,
    formIsValid: getIsValid(form),
  };
};

export const getInputValue = (
  e: ChangeEvent<HTMLInputElement>,
  input: IInputState
) => {
  const value = getTargetValue(e);
  return {
    ...input,
    value,
    isError: input.required === undefined ? false : !value.trim(),
  };
};

export const formReducer = (state: IFormState, action: TFormAction) => {
  // return state
  switch (action.type) {
    case 'CHANGE':
      const { id, e } = action.payload;
      const input = state.form[id];
      const newForm = {
        ...state.form,
        [id]: getInputValue(e, input),
      };
      return {
        ...state,
        form: newForm,
        formIsValid: getIsValid(newForm),
      };
    case 'TOUCH':
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.id]: {
            ...state.form[action.payload.id],
            isTouched: true,
          },
        },
      };
    case 'VALIDATE':
      return {
        ...state,
        form: objMap(state.form, touchAll),
      };
    default:
      return state;
  }
};
