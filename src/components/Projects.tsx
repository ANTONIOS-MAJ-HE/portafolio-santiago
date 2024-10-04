// Projects.jsx
import React from 'react';
import styles from './Projects.module.css'; // Importar el CSS Module

const projectsData = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    link: '#',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    link: '#',
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Mis Proyectos</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} className={styles.projectLink}>Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
