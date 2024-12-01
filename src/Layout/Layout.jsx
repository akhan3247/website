import React from 'react';
// import Header from '../HeroPage/Header/Header';
// import Hero from '../HeroPage/Hero/Hero';
import HeroPage from '../HeroPage/HeroPage';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Project/Project';
import Contact from '../Contact/Contact';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <HeroPage />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Layout;