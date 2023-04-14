import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCredentials } from '../../@type/auth.type';
import AuthForm from '../../components/AuthForm';
import { signup } from '../../utils/api/authApi';
import styles from './SignupPage.module.scss';

function SignupPage() {
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: AuthCredentials) => {
    try {
      const response = await signup({ email, password });

      if (response.status !== 201) {
        console.log('실패');
      }

      navigate('/signin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className={styles.article}>
      <AuthForm authType="signup" onSubmit={handleSubmit} />
    </article>
  );
}

export default SignupPage;
