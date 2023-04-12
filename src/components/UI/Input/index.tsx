import React, { Fragment } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  name: string;
  label?: string;
  displayLabel?: boolean;
  [rest: string]: any;
};

function Input({ name, label, displayLabel = true, ...rest }: InputProps) {
  return (
    <>
      {displayLabel && <label htmlFor={name}>{label}</label>}
      <input className={styles.input} name={name} {...rest} />
    </>
  );
}

export default Input;
