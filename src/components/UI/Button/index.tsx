import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  [rest: string]: any;
};

function Button({ type = 'button', children, className, ...rest }: ButtonProps) {
  const classNames = `${styles.button} ${className}`;

  return (
    <button className={classNames} type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
