import React, { Fragment } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  name: string;
  label: string;
  [rest: string]: any;
};

function Input({ name, label, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} name={name} {...rest} />
    </>
  );
}

export default Input;
