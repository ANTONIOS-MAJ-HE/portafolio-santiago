// src/components/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className="nav-bg">
      <nav className="contenedor-principal contenedor">
        <a href="#inicio">Inicio</a>
        <a href="#sobremi">Sobre Mi</a>
        <a href="#skills">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="CV_AJSMasgo.pdf" target="_blank">Curriculum Vitae</a>
      </nav>
    </div>
  );
};

export default Navbar;
