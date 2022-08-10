import React from 'react';
import classnames from 'classnames';

interface IButton {
  type?: 'primary' | 'secondary' | 'outline' | 'inline';
  round?: boolean;
  fancy?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  type = 'primary',
  round = false,
  backgroundColor,
  fancy = false,
  size = 'medium',
  children,
  className,
  onClick,
  disabled,
}: IButton) => {
  const btnClass = classnames({
    'nt-btn': true,
    [`nt-btn__${type}`]: true,
    [`nt-btn__${size}`]: true,
    round: round,
    fancy: fancy && type !== 'outline' && !round,
    'fancy-round': fancy && type !== 'outline' && round,
  });

  const style =
    type === 'outline'
      ? { color: backgroundColor, borderColor: backgroundColor }
      : { backgroundColor };

  return (
    <button
      className={`${btnClass} ${className}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
