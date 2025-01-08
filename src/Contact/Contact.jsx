import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const contactLinks = [
    {
      platform: "Email",
      value: "abdullah.khan3247@gmail.com",
      icon: "📧",
      link: "mailto:abdullah.khan3247@gmail.com"
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/abdullah-khan-3247",
      icon: "💼",
      link: "https://linkedin.com/in/abdullah-khan3247"
    },
    {
      platform: "GitHub",
      value: "github.com/akhan3247",
      icon: "💻",
      link: "https://github.com/akhan3247"
    }
  ];

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2>Let's Connect</h2>
          <p className={styles.subtitle}>Feel free to reach out for collaborations or just a friendly hello</p>
          
          <div className={styles.contactGrid}>
            {contactLinks.map((contact, index) => (
              <a 
                key={index} 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactCard}
              >
                <span className={styles.icon}>{contact.icon}</span>
                <h3>{contact.platform}</h3>
                <p>{contact.value}</p>
              </a>
            ))}
          </div>
          
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Abdullah Khan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;