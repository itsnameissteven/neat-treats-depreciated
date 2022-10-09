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
  required?: boolean;
  disabled?: boolean;
  withLabel?: boolean;
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
  required,
  disabled,
  withLabel,
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
    'neat-input__label--with-content': value || placeholder,
    'neat-input__label--error': value || (placeholder && !!errorMessage),
  });

  const fieldSetClass = classnames('neat-input', `${className}`, {
    'neat-input__error': !!errorMessage,
  });

  const withLabelClass = classnames('neat-input__with-label', {
    'neat-input__with-label--error': !!errorMessage,
  });

  const width = isInFocus || value || placeholder ? `${legendWidth}px` : '0px';

  const input = (
    <>
      <input
        className="neat-input__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        onBlur={() => setIsInFocus(false)}
        onFocus={() => setIsInFocus(true)}
        required={required}
        disabled={disabled}
        {...rest}
      />
      {!!errorMessage && (
        <p className="neat-input__error-msg">{errorMessage}</p>
      )}
    </>
  );

  if (withLabel) {
    return (
      <>
        <label htmlFor={id} className={withLabelClass}>
          {label}
        </label>
        <div className={fieldSetClass}>{input}</div>
      </>
    );
  }

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
      {input}
    </fieldset>
  );
};

export default Input;
