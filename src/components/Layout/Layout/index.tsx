import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default Layout;
