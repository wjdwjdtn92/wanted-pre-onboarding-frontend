import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  [rest: string]: any;
};

function Button({ type = 'button', children, ...rest }: ButtonProps) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
