import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCredentials } from '../../@type/auth.type';
import useAuth from '../../Auth/useAuth';
import AuthForm from '../../components/AuthForm';
import { signin } from '../../utils/api/authApi';
import styles from './SignIn.module.scss';

function SignupPage() {
  const navigate = useNavigate();
  const { setAccessToken } = useAuth();

  const handleSubmit = async ({ email, password }: AuthCredentials) => {
    try {
      const response = await signin({ email, password });
      console.log(response);
      const accessToken = response.access_token;

      if (accessToken?.length === 0) {
        console.log('실패');
        return;
      }

      localStorage.setItem('access_token', accessToken);
      setAccessToken(accessToken);
      navigate('/todo');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <AuthForm authType="signin" onSubmit={handleSubmit} />
    </main>
  );
}

export default SignupPage;
