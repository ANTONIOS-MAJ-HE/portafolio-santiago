// src/components/Video.jsx
import React from 'react';
import styles from './Video.module.css';
import videoFile from '../assets/images/47802-451812879.mp4';

const Video = () => {
  return (
    <div className={styles.videoBackground}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.backgroundVideo}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
