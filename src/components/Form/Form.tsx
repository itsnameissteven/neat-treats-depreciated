import React, { useEffect } from 'react';
import { useDynamicRefs } from '../../hooks';
import { Input } from '..';
import { TFormComponent } from '../../types';

interface IForm {
  components: TFormComponent[];
  className?: string;
}

const Form = ({ components, className }: IForm) => {
  const { setRef, refs } = useDynamicRefs();

  useEffect(() => {
    if (refs?.current?.test) {
      refs?.current?.test.focus();
    }
  }, [refs.current]);

  const allInputs = components.map((component) => {
    const {
      name,
      id,
      value,
      type,
      placeHolder,
      errorMessage,
      withLabel,
      required,
      label,
    } = component;
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
            errorMessage={errorMessage}
            onChange={() => null}
          />
        );
      default:
        return <div></div>;
    }
  });
  return <form className={`form ${className}`}>{allInputs}</form>;
};

export default Form;
