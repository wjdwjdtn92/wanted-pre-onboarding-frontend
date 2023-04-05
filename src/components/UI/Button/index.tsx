import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  [rest: string]: any;
};

function Button({ type = 'button', children, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
