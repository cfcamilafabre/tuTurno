import React from 'react';
import styles from './Circle.module.css';

const Circle = ({ number, text, span }) => {
  return (
    <div className={styles.circleContainer}>
      <div className={styles.circle}>{number}</div>
      <h5 className={styles.circleText}>{text}</h5>
      <span className={styles.circleSpan}>{span}</span>
    </div>
  );
};

export default Circle;