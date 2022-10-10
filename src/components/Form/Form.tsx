import React, { useEffect } from 'react';
import { useDynamicRefs, useForm } from '../../hooks';
import { Input, Button } from '..';
import { TFormComponent } from '../../types';
import './Form.scss';

interface IForm {
  components: TFormComponent[];
  className?: string;
}

const Form = ({ components, className }: IForm) => {
  const { setRef, refs } = useDynamicRefs();
  const { formState, formDispatch } = useForm(components);

  useEffect(() => {
    if (refs?.current?.test) {
      refs?.current?.test.focus();
    }
  }, [refs.current]);

  const allInputs = components.map((component) => {
    const {
      name,
      id,
      type,
      placeHolder,
      errorMessage,
      withLabel,
      required,
      label,
    } = component;

    const { value, error } = formState[id];
    switch (type) {
      case 'input':
        return (
          <Input
            ref={(el) => setRef(el, id)}
            key={id}
            id={id}
            label={label}
            name={name}
            value={value}
            placeholder={placeHolder}
            required={required}
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
        return <div></div>;
    }
  });
  return (
    <form className={`form ${className}`} onSubmit={(e) => e.preventDefault()}>
      {allInputs}
      <Button round>Submit</Button>
    </form>
  );
};

export default Form;
