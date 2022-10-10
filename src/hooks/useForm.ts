import { TFormComponent } from '../types';
import { useReducer, ChangeEvent } from 'react';
import { getInputValue } from '../utils';

interface initialFormState {
  [key: string]: {
    value: string;
    error: boolean;
  };
}

type TFormAction = {
  type: 'CHANGE';
  payload: {
    id: string;
    e: ChangeEvent<HTMLInputElement>;
  };
};

const getInitialFormState = (data: TFormComponent[]) => {
  return data.reduce((acc: initialFormState, el) => {
    const { id, value } = el;
    acc[id] = {
      value,
      error: false,
    };
    return acc;
  }, {});
};

const formReducer = (state: initialFormState, action: TFormAction) => {
  // return state
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.payload.id]: getInputValue(action.payload.e),
      };
    default:
      return state;
  }
};

const useForm = (formData: TFormComponent[]) => {
  const [formState, formDispatch] = useReducer(
    formReducer,
    getInitialFormState(formData)
  );

  return { formState, formDispatch };
};

export default useForm;
