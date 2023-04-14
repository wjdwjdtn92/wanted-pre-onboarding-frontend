import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Auth/useAuth';
import styles from './Header.module.scss';

function Header() {
  const { accessToken, setAccessToken } = useAuth();
  const naviagate = useNavigate();

  const logout = () => {
    localStorage.removeItem('access_token');
    setAccessToken(null);
  };

  const handleClick = () => {
    logout();
    naviagate('/signin');
  };

  return (
    <header className={styles.header}>
      {accessToken ? (
        <button className={styles.link} onClick={handleClick}>
          로그아웃
        </button>
      ) : (
        <>
          <Link className={styles.link} to="/signin">
            로그인
          </Link>
          <Link className={styles.link} to="/signup">
            회원가입
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
