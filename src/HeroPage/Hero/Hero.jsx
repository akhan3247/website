import React from 'react';
import styles from './Hero.module.css';
import { ReactTyped }  from "react-typed";


const Hero = () => {
  const socialIcons = [
    { src: "/assets/github.png", alt: "Github", url: "https://www.github.com/akhan3247" },
    { src: "/assets/linkedin.png", alt: "Linkedin", url: "https://www.linkedin.com/in/abdullah-khan3247" },
    { src: "/assets/insta.png", alt: "Instagram", url: "https://www.instagram.com/akhan3247/" }
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <div className={styles.title}>
            <p className={styles.title1}>
              &nbsp;&nbsp;&nbsp;
              <ReactTyped 
              strings ={[
                "Hi..",
                "Hello..",
              ]}
              typeSpeed = {80}
              loop
              /> </p>
              <p className={styles.title2}> I am Abdullah Khan 
             <br/> <span className={styles.highlight}>softwareDeveloper().</span> </p> 
              </div>
            <div className={styles.socialLinks}>
              {socialIcons.map((icon, index) => ( <a key = {index} href={icon.url} target='_blank' rel="noopener noreferrer">
                <img key={index} loading="lazy" src={icon.src} className={styles.socialIcon} alt={icon.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img loading="lazy" src="/assets/photo.png" className={styles.profileImage} alt="Abdullah Khan profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;