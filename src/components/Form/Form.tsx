import React from 'react';
import { useDynamicRefs, useForm } from '../../hooks';
import { Input, Button } from '..';
import { TFormComponent } from '../../types';

interface IForm {
  components: TFormComponent[];
  title?: string;
  className?: string;
  withValidate?: boolean;
}

const Form = ({ components, className, title, withValidate = true }: IForm) => {
  const { setRef, scrollToFocus } = useDynamicRefs();
  const { formState, formDispatch } = useForm(components);
  const { form, formIsValid } = formState;

  const allInputs = components.map((component) => {
    const { name, id, type, placeHolder, errorMessage, withLabel, label } =
      component;

    const { value, isError, isTouched } = form[id];
    const error = isError && isTouched;
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
            inputProps={{
              onBlurCapture: () =>
                formDispatch({ type: 'TOUCH', payload: { id } }),
            }}
          />
        );
      default:
        return null;
    }
  });

  const onSubmit = () => {
    formDispatch({ type: 'VALIDATE' });
    if (withValidate) {
      const refId = components.find((c) => formState.form[c.id].isError)?.id;
      refId && scrollToFocus({ key: refId });
    }
    if (!formIsValid) {
      return;
    }
  };

  return (
    <form className={`form ${className}`} onSubmit={(e) => e.preventDefault()}>
      {title && <h1 className="form__title">{title}</h1>}
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
