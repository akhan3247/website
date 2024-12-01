import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.section}>
       <div className={styles.overlay}>
        <h2>ABOUT ME</h2>
        <h2>EXPERIENCE</h2>
        <h2>PROJECTS</h2>
        <p>
          Born in Saudi Arabia, brought up in India and now curiosity and tech
          brought me to America. I make full stack web and mobile apps.
        </p>
       </div>
      </div>
    </div>
  );
};

export default About;