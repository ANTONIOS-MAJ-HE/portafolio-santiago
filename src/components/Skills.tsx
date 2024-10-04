// Skills.jsx
import React from 'react';
import styles from './Skills.module.css'; // Importar el CSS Module

const skillsData = [
  { skill: 'HTML', level: 90 },
  { skill: 'CSS', level: 80 },
  { skill: 'JavaScript', level: 85 },
  { skill: 'React', level: 75 },
  { skill: 'Node.js', level: 70 },
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Mis Habilidades</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <h3>{skill.skill}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
