import React from 'react';
import styles from './Experience.module.css';
//import frugalHubLogo from '../../public/assets/frugal.png'; // Adjust path as needed

const Experience = () => {
  const experiences = [
    {
      company: "SCU Frugal Innovation Hub",
      role: "Software Developer",
      period: "2024-Present",
      logo: "assets/frugal.png",
      description: [
        "Led development of a Homework app, frontend & backend, deploying Flutter, Dart, and Firebase with MVC design patterns",
        "Expanded educational access for over 5,000 Rwandan children and educators by implementing innovative voice and video recording features, improving learning accessibility"
      ],
      skills: ["FLUTTER", "DART", "FIREBASE", "MVVC"] // Add actual skills
    },
    {
      company: "The Block",
      role: "Software Developer",
      period: "2023-2024",
      logo: "assets/block.png",
      description: [
        "Led backend development for The Block, a scheduling platform connecting freelancers with clients, utilizing JavaScript frameworks like AngularJS and ReactJS to build intuitive and efficient features for booking, payments, and video communication",
      ],
      skills: ["REACT", "AWS", "DYNAMODB", "S3"] // Add actual skills
    }
  ];

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.header}>
                <div className={styles.companyInfo}>
                  <h3>{exp.company}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <img src={exp.logo} alt={`${exp.company} logo`} className={styles.companyLogo} />
              </div>
              <h4 className={styles.role}>{exp.role}</h4>
              <ul className={styles.description}>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className={styles.skills}>
                {exp.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;