import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  onClick
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;