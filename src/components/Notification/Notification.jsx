import React from 'react';
import styles from '../Notification/Notification.module.css';

export const Notification = ( {message} ) => {
  return (
        <p className={styles.notification
        }>{message}</p>
  )
}
