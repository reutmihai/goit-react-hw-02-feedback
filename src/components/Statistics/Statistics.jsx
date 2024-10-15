import React from 'react';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles['statistics-list']}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total Feedback: {total}</p>
          <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
