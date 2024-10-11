// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          © 2024 Antonio Santiago - Freelancer | Todos los derechos reservados.
        </p>
        <div className={styles.socialIcons}>
          <a
            href="https://linkedin.com/in/antonio-santiago-masgo"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/jairo.santiago._?igsh=dW0wY3FhemswN2pu"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@antoniojairosantiagomasgo8941"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://github.com/antonio-santiago"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
