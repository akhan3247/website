import React from 'react';
import styles from './Project.module.css';

const Project = () => {
  const projects = [
    {
      name: "Homework App",
      description: "Educational platform for Rwandan students with voice and video recording features",
      techStack: ["Flutter", "Firebase", "Dart", "MVC"]
    },
    {
      name: "Ethnic Street Wear E-commerce Website",
      description: "E-commerce website for Ethnic Street Wear with payment gateway integration",
      techStack: ["React", "MongoDB", "NodeJS", "Express", "Stripe"]
    },
    {
      name: "Face Recognition Attendance System ",
      description: "Face Recognition Attendance System with real-time attendance tracking and data analysis",
      techStack: ["Python", "OpenCV", "Keras", "Face Recognition"]
    }
  ];

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2>Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
