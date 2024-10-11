// src/components/ExperienceCard.jsx
import React from 'react';
import styles from './ExperienceCard.module.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ company, icon, location, duration, experiences }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={`${company} icon`} className={styles.companyIcon} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.company}>{company}</h3>
        <p className={styles.duration}>{duration}</p>
        <p className={styles.location}>
          <FaMapMarkerAlt /> {location}
        </p>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <h4 className={styles.title}>{exp.title}</h4>
              <p className={styles.experienceDuration}>
                <FaCalendarAlt /> {exp.duration}
              </p>
              <p className={styles.description}>{exp.description}</p>
              <p className={styles.skills}>{exp.skills.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
