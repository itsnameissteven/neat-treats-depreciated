import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';

interface IInput {
  name: string;
  id: string;
  value: string;
  placeholder?: string;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  errorMessage?: string;
  [x: string]: any;
}

const Input = ({
  value,
  placeholder,
  onChange,
  name,
  id,
  className,
  label,
  errorMessage,
  ...rest
}: IInput) => {
  const labelRef = useRef<HTMLLabelElement | null>(null);
  const [legendWidth, setLegendWidth] = useState(0);
  const [isInFocus, setIsInFocus] = useState(false);

  useEffect(() => {
    if (labelRef.current) {
      setLegendWidth(labelRef.current.offsetWidth);
    }
  }, []);

  const labelClass = classnames('neat-input__label', {
    'neat-input__label--with-content': value.length,
  });

  const fieldSetClass = classnames('neat-input', `${className}`, {
    'neat-input__error': !!errorMessage,
  });

  const width = isInFocus || value.length ? `${legendWidth}px` : '0px';

  return (
    <fieldset className={fieldSetClass}>
      {label && (
        <>
          <legend style={{ width }} />
          <label ref={labelRef} className={labelClass}>
            {label}
          </label>
        </>
      )}
      <input
        className="neat-input__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        onBlur={() => setIsInFocus(false)}
        onFocus={() => setIsInFocus(true)}
        {...rest}
      />
      {!!errorMessage && (
        <p className="neat-input__error-msg">{errorMessage}</p>
      )}
    </fieldset>
  );
};

export default Input;
