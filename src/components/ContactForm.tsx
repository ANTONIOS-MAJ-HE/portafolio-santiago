// src/components/ContactForm.jsx
import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section>
      <h2>Contacto</h2>
      <form className="formulario">
        <fieldset>
          <legend>Contactános llenando todos los campos</legend>
          <div className="contenedor-campos">
            <div className="campo">
              <label>Nombre</label>
              <input className="input-text" type="text" placeholder="Tu Nombre" />
            </div>
            <div className="campo">
              <label>Teléfono</label>
              <input className="input-text" type="tel" placeholder="Tu Teléfono" />
            </div>
            <div className="campo">
              <label>Correo</label>
              <input className="input-text" type="email" placeholder="Tu Email" />
            </div>
            <div className="campo">
              <label>Mensaje</label>
              <textarea className="input-text"></textarea>
            </div>
          </div>
          <div className="alinear flex">
            <input className="boton w-sm-100" type="submit" value="Enviar" />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default ContactForm;
