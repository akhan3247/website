import React from 'react';
import styles from './Hero.module.css';
import { ReactTyped }  from "react-typed";

const Hero = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/38ae912447c89abc68aaa7aa8f51bfadcda80c34d2fe2e01de73e613fb957121?placeholderIfAbsent=true&apiKey=60c81d2e93854144ada094e254de7248", alt: "Social media icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a7f7fcd869beb47abf33a2838098851977480a0bf850741d080c7e8e6419b78?placeholderIfAbsent=true&apiKey=60c81d2e93854144ada094e254de7248", alt: "Social media icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e595a8a7d41b03254c1a1cd016e16b3348bfde9871a6f9e85e4bc2245983b0d0?placeholderIfAbsent=true&apiKey=60c81d2e93854144ada094e254de7248", alt: "Social media icon 3" }
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>
              <ReactTyped 
              strings ={[
                "Hi..",
                "Hello..",
              ]}
              typeSpeed = {80}
              loop
              />
              <br /> I am Abdullah Khan - <br />A{" "}
              <span className={styles.highlight}>softwareDeveloper</span> ().
            </h2>
            <p className={styles.description}>
              Born in Saudi Arabia, brought up in India and now curiosity and tech brought me to America. I make Fullstack Web Application and Mobile apps.
            </p>
            <div className={styles.socialLinks}>
              {socialIcons.map((icon, index) => (
                <img key={index} loading="lazy" src={icon.src} className={styles.socialIcon} alt={icon.alt} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0a99815e98f24d42307775a6dd1b3daedb4572be3990e1e94f21698aacd7a80?placeholderIfAbsent=true&apiKey=60c81d2e93854144ada094e254de7248" className={styles.profileImage} alt="Abdullah Khan profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;