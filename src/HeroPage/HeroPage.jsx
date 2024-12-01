import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import styles from './HeroPage.module.css';

const HeroPage = () => {
  return (
    <div className={styles.heroPage}>
      <Header />
      <Hero />
    </div>
  );
};

export default HeroPage;