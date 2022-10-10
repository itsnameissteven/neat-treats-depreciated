import { TFormComponent } from '../types';
import { useReducer } from 'react';
import { getInitialFormState, formReducer } from '../utils';

const useForm = (formData: TFormComponent[]) => {
  const [formState, formDispatch] = useReducer(
    formReducer,
    getInitialFormState(formData)
  );

  return { formState, formDispatch };
};

export default useForm;
