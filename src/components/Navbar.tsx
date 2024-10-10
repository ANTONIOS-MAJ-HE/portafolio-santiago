// src/components/Navbar.jsx
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbarBg}>
      <nav className={styles.navbarContent}>
        <div className={styles.navbarLogo}>MyPortfolio</div>
        <div className={styles.navbarMenuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`${styles.navbarLinks} ${menuOpen ? styles.open : ''}`}>
          <a className={styles.navbarLink} href="#inicio">Inicio</a>
          <a className={styles.navbarLink} href="#sobremi">Sobre Mí</a>
          <a className={styles.navbarLink} href="#skills">Habilidades</a>
          <a className={styles.navbarLink} href="#proyectos">Proyectos</a>
          <a className={styles.navbarLink} href="CV_AJSMasgo.pdf" target="_blank" rel="noopener noreferrer">Curriculum Vitae</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
