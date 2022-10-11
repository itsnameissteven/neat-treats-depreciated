import React, { useEffect } from 'react';
import { useDynamicRefs, useForm } from '../../hooks';
import { Input, Button } from '..';
import { TFormComponent } from '../../types';

interface IForm {
  components: TFormComponent[];
  className?: string;
  withValidate?: boolean;
}

const Form = ({ components, className, withValidate = true }: IForm) => {
  const { setRef, scrollToFocus } = useDynamicRefs();
  const { formState, formDispatch } = useForm(components);
  const { form, firstError } = formState;

  useEffect(() => {
    firstError && scrollToFocus({ key: firstError });
  }, [firstError]);

  const allInputs = components.map((component) => {
    const {
      name,
      id,
      type,
      placeHolder,
      errorMessage,
      withLabel,
      label,
    } = component;

    const { value, error } = form[id];
    switch (type) {
      case 'input':
        return (
          <Input
            ref={(el) => setRef(el, id)}
            key={id}
            id={id}
            label={label}
            name={name || id}
            value={value}
            placeholder={placeHolder}
            withLabel={withLabel}
            errorMessage={
              error ? errorMessage || 'Please complete this field' : ''
            }
            onChange={(e) =>
              formDispatch({ type: 'CHANGE', payload: { id, e } })
            }
          />
        );
      default:
        return null;
    }
  });

  const onSubmit = () => {
    withValidate && formDispatch({ type: 'VALIDATE' });
    firstError && scrollToFocus({ key: firstError });
  };

  return (
    <form className={`form ${className}`} onSubmit={(e) => e.preventDefault()}>
      <div className="form__input-container">{allInputs}</div>
      <div className="form__btn-container">
        <Button round onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
