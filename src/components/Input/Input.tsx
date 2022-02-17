import React, { useRef, useEffect, useState } from "react";
import classnames from "classnames";

interface IInput {
  name?: string;
  id?: string;
  maxWidth?: string;
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
  maxWidth = "400px",
  ...rest
}: IInput) => {
  const labelRef = useRef<HTMLLabelElement | null>(null);
  const [legendWidth, setLegendWidth] = useState(0);
  const [isInFocus, setIsInFocus] = useState(false);
  const styles = {
    maxWidth: maxWidth,
  };

  useEffect(() => {
    if (labelRef.current) {
      setLegendWidth(labelRef.current.offsetWidth);
    }
  }, []);

  const labelClass = classnames("neat-input__label", {
    "neat-input__label--with-content": value.length,
  });

  const width = isInFocus || value.length ? `${legendWidth}px` : "0px";

  return (
    <fieldset className={`neat-input ${className}`} style={styles}>
      {label && <legend style={{ width }}></legend>}
      {label && (
        <label ref={labelRef} className={labelClass}>
          {label}
        </label>
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
    </fieldset>
  );
};

export default Input;
