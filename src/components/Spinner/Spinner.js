import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.wrapper}>
    <span className={styles.ray} />
    <span className={styles.ray} />
    <span className={styles.ray} />
    <span className={styles.ray} />
    <span className={styles.ray} />
    <span className={styles.ray} />
    <span className={styles.ray} />
    <span className={styles.ray} />
  </div>
);

export default Spinner;
