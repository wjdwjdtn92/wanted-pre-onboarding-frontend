import React, { useEffect, useState } from 'react';
import { AuthCredentials } from '../../@type/auth.type';

import useInputs from '../../hooks/useInputs';
import { validateEmail, validatePassword } from '../../utils/validate';
import Button from '../UI/Button';
import Input from '../UI/Input';

import styles from './AuthForm.module.scss';

type AuthFormProps = {
  onSubmit: ({ email, password }: AuthCredentials) => void;
  authType: 'signin' | 'signup';
};

function AuthForm({ onSubmit, authType }: AuthFormProps) {
  const [{ email, password }, onChange] = useInputs<AuthCredentials>({
    email: '',
    password: '',
  });
  const [disabledButton, setDisabledButton] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({ email, password });
  };

  useEffect(() => {
    if (validateEmail({ email }) && validatePassword({ password })) {
      setDisabledButton(false);
      return;
    }

    setDisabledButton(true);
  }, [email, password]);

  return (
    <form className={styles.auth_form} onSubmit={handleSubmit}>
      <fieldset className={styles.auth_form_fieldset}>
        <Input
          value={email}
          name="email"
          label="이메일"
          data-testid="email-input"
          onChange={onChange}
          type="email"
          autoComplete="off"
          required
        />
      </fieldset>
      <fieldset className={styles.auth_form_fieldset}>
        <Input
          value={password}
          name="password"
          label="패스워드"
          data-testid="password-input"
          onChange={onChange}
          type="password"
          autoComplete="off"
          required
        />
      </fieldset>
      {
        {
          signup: (
            <Button
              data-testid="signup-button"
              type="submit"
              disabled={disabledButton}
              onClick={handleSubmit}
            >
              회원가입
            </Button>
          ),
          signin: (
            <Button
              data-testid="signin-button"
              type="submit"
              disabled={disabledButton}
              onClick={handleSubmit}
            >
              로그인
            </Button>
          ),
        }[authType]
      }
    </form>
  );
}

export default AuthForm;
