import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Layout;