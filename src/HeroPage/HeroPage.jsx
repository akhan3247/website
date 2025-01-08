import React from 'react';
import Hero from './Hero/Hero';
import styles from './HeroPage.module.css';

const HeroPage = () => {
  return (
    <div className={styles.heroPage}>
      <Hero />
    </div>
  );
};

export default HeroPage;