import React, { Fragment } from 'react';

type InputProps = {
  name: string;
  label: string;
  [rest: string]: any;
};

function Input({ name, label, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...rest} />
    </>
  );
}

export default Input;
