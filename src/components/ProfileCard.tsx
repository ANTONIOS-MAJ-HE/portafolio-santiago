// src/components/ProfileCard.jsx
import React from 'react';
import styles from './ProfileCard.module.css';
import profileCardB from '../assets/images/card-pattern.png';
import profileCardI from '../assets/images/1702103341153.jpg';
import iconW from '../assets/icons/whatsapp.png';
import iconP from '../assets/icons/phone.png';
import iconE from '../assets/icons/email.png';
import iconS from '../assets/icons/website.png';

const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileCardHeader}>
        <img src={profileCardB} alt="Fondo" className={styles.profileCardBackground} />
        <img src={profileCardI} alt="Antonio Santiago" className={styles.profileCardImage} />
      </div>
      <div className={styles.profileCardBody}>
        <h2 className={styles.profileCardTitle}>Antonio Santiago</h2>
        <p className={styles.profileCardDescription}>
          Te ayudo a diseñar y desarrollar tu página web para potenciar tu marca en Internet.
        </p>
        <div className={styles.profileCardContactButtons}>
          <a href="https://wa.me/917547319" className={`${styles.btn} ${styles.btnWhatsapp}`}>
            <img src={iconW} alt="WhatsApp Icon" className={styles.icon} /> Escríbeme por WhatsApp
          </a>
          <a href="tel:+51917547319" className={`${styles.btn} ${styles.btnPhone}`}>
            <img src={iconP} alt="Phone Icon" className={styles.icon} /> Llámame a mi móvil
          </a>
          <a href="mailto:antonio.santiago@tecsup.edu.pe" className={`${styles.btn} ${styles.btnEmail}`}>
            <img src={iconE} alt="Email Icon" className={styles.icon} /> Envíame un email
          </a>
          <a href="https://mi-pagina-web.com" className={`${styles.btn} ${styles.btnWebsite}`}>
            <img src={iconS} alt="Website Icon" className={styles.icon} /> Mi página web
          </a>
        </div>
        <div className={styles.profileCardSocialIcons}>
          <a href="https://linkedin.com/in/antonio-santiago-masgo" className={`${styles.socialIcon} ${styles.linkedin}`}></a>
          <a href="https://www.instagram.com/jairo.santiago._?igsh=dW0wY3FhemswN2pu" className={`${styles.socialIcon} ${styles.instagram}`}></a>
          <a href="https://www.youtube.com/@antoniojairosantiagomasgo8941" className={`${styles.socialIcon} ${styles.youtube}`}></a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
