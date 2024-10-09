// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerHeader}>
      <h1 className={styles.titleHeader}>Antonio Santiago 
      <span className={styles.titleSpan}>Developer Full Stack</span></h1>
    </header>
  );
};

export default Header;

