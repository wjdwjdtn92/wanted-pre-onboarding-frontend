import React, { Fragment } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  name: string;
  label?: string;
  className?: string;
  displayLabel?: boolean;
  [rest: string]: any;
};

function Input({ name, label, className, displayLabel = true, ...rest }: InputProps) {
  const classNames = `${styles.input} ${className}`;

  return (
    <>
      {displayLabel && <label htmlFor={name}>{label}</label>}
      <input className={classNames} name={name} {...rest} />
    </>
  );
}

export default Input;
