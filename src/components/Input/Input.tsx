import React from 'react';
import './Input.scss';

interface IInput {
  name?: string;
  id?: string;
  value: string;
  placeholder?: string;
  label?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
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
  ...rest
}: IInput) => {
  return (
    <div className={`neat-input ${className}`}>
      {label && <label className="neat-input__label">label</label>}
      <input
        className="neat-input__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Input;
