import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCredentials } from '../../@type/auth.type';
import SignupForm from '../../components/SignupForm';
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
    <main className={styles.main}>
      <SignupForm onSubmit={handleSubmit} />
    </main>
  );
}

export default SignupPage;
