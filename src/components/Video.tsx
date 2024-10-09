// src/components/Header.jsx
import React from 'react';
import styles from './Video.module.css';

const Video = () => {
  return (
    <div className={styles.videoBackground}>
      <video>
        <source src="assets/images/47802-451812879.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;