// src/components/ExperienceList.jsx
import React from 'react';
import ExperienceCard from './ExperienceCard';
import styles from './ExperienceList.module.css';
import companyIcon1 from '../assets/icons/company2.png';
import companyIcon2 from '../assets/icons/company3.png';

const experienceData = [
  {
    company: 'Stech Perú',
    icon: companyIcon1,
    location: 'Av. Honorio Delgado 224 Urb. Ingeniería, San Martín de Porres.',
    duration: 'Jornada parcial · 10 meses',
    experiences: [
      {
        title: 'Técnico de Soporte de Sistemas',
        duration: 'ago. 2024 - actual · 3 meses',
        description: 'Brindé soporte técnico a los usuarios y resolví problemas de infraestructura de TI de forma remota, mejorando la eficiencia del equipo en un 20%.',
        skills: ['Microsoft SQL Server', 'C#', 'Git'],
      },
      {
        title: 'Practicante pre profesional de Sistemas',
        duration: 'ene. 2024 - jul. 2024 · 7 meses',
        description: 'Participé en la implementación de scripts de automatización para la migración de datos, lo cual redujo el tiempo de procesamiento en un 15%.',
        skills: ['Microsoft SQL Server', 'Python', 'Docker'],
      },
    ],
  },
  {
    company: 'eBIZ Latin America',
    icon: companyIcon2,
    location: 'Av. Arica 785, Breña · Presencial',
    duration: 'Contrato de prácticas · 2 meses',
    experiences: [
      {
        title: 'Practicante TI',
        duration: 'jul. 2024 - ago. 2024',
        description: 'Documenté procesos y apoyé en la implementación de soluciones de TI para mejorar la gestión de datos en la organización.',
        skills: ['Azure Data Factory', 'Git', 'JIRA'],
      },
    ],
  },
];

const ExperienceList = () => {
  return (
    <section className={styles.experienceList}>
      <h2 className={styles.title}>Experiencia</h2>
      {experienceData.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </section>
  );
};

export default ExperienceList;
