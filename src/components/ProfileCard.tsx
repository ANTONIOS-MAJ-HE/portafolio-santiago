// src/components/ProfileCard.jsx
import React from 'react';
//import '../styles/styles.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="assets/images/card-pattern.png" alt="Fondo" className="background-image" />
        <img src="assets/images/1702103341153.jpg" alt="Antonio Santiago" className="profile-image" />
      </div>
      <div className="profile-body">
        <h2>Antonio Santiago</h2>
        <p>Te ayudo a diseñar y desarrollar tu página web para potenciar tu marca en Internet.</p>
        <div className="contact-buttons">
          <a href="https://wa.me/917547319" className="btn btn-whatsapp">
            <img src="assets/icons/whatsapp.png" alt="WhatsApp Icon" className="icon" /> Escríbeme por WhatsApp
          </a>
          <a href="tel:+51917547319" className="btn btn-phone">
            <img src="assets/icons/phone.png" alt="Phone Icon" className="icon" /> Llámame a mi móvil
          </a>
          <a href="mailto:antonio.santiago@tecsup.edu.pe" className="btn btn-email">
            <img src="assets/icons/email.png" alt="Email Icon" className="icon" /> Envíame un email
          </a>
          <a href="https://mi-pagina-web.com" className="btn btn-website">
            <img src="assets/icons/website.png" alt="Website Icon" className="icon" /> Mi página web
          </a>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com/in/antonio-santiago-masgo" className="social-icon linkedin"></a>
          <a href="https://www.instagram.com/jairo.santiago._?igsh=dW0wY3FhemswN2pu" className="social-icon instagram"></a>
          <a href="https://www.youtube.com/@antoniojairosantiagomasgo8941" className="social-icon youtube"></a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
