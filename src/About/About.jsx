import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2>ABOUT ME</h2>
          <p>
            Hello! I'm Abdullah Khan, a passionate and driven software engineer based in Santa Clara, CA. 
            I recently earned my Master's degree in Computer Science from Santa Clara University. 
            With experience across diverse technologies, including React, Python, AWS, and Docker, 
            I enjoy solving complex problems and building impactful solutions.
          </p>

          <p>
            My expertise spans front-end development, back-end engineering, and cloud infrastructure, 
            and I thrive in environments where I can innovate and collaborate. I am currently working 
            with the Frugal Innovation Hub, where I am developing educational applications aimed at 
            empowering children in Rwanda. These tools are designed to make learning more accessible, 
            engaging, and impactful, helping to bridge the educational gap and create opportunities 
            for young learners. I'm also delving into generative AI and deep learning, exploring new 
            ways to enhance user experiences.
          </p>

          <p>
            Beyond coding, I enjoy attending tech conferences, learning about emerging trends, and 
            networking with industry professionals. When I'm not at my desk, I love discovering new 
            music and working on creative projects that bring people together.
          </p>

          <p>
            Feel free to explore my portfolio to see some of my favorite projects, and let's connect 
            if you'd like to collaborate or chat about tech!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;