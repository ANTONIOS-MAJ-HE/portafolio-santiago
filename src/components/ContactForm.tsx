// src/components/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contacto</h2>
      <form className={styles.contactForm}>
        <fieldset className={styles.contactFieldset}>
          <legend className={styles.contactLegend}>Contáctanos llenando todos los campos</legend>
          <div className={styles.contactFields}>
            <div className={styles.contactField}>
              <label className={styles.contactLabel}>Nombre</label>
              <input className={styles.contactInput} type="text" placeholder="Tu Nombre" />
            </div>
            <div className={styles.contactField}>
              <label className={styles.contactLabel}>Teléfono</label>
              <input className={styles.contactInput} type="tel" placeholder="Tu Teléfono" />
            </div>
            <div className={styles.contactField}>
              <label className={styles.contactLabel}>Correo</label>
              <input className={styles.contactInput} type="email" placeholder="Tu Email" />
            </div>
            <div className={styles.contactField}>
              <label className={styles.contactLabel}>Mensaje</label>
              <textarea className={styles.contactTextarea} placeholder="Escribe tu mensaje aquí..."></textarea>
            </div>
          </div>
          <div className={styles.contactAlignCenter}>
            <input className={styles.contactButton} type="submit" value="Enviar" />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default ContactForm;
