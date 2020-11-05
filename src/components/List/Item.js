import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

const Item = ({ day, minTemp, maxTemp, sunrise, sunset }) => {
  function toggleOpen(e) {
    e.currentTarget.classList.toggle(styles.open);
  }

  return (
    <li className={styles.item} onClick={toggleOpen}>
      <div className={styles.topRow}>
        <time className={styles.day}>{day}</time>
        <div className={styles.maxTemp}>{maxTemp}°</div>
        <div className={styles.minTemp}>{minTemp}°</div>
      </div>
      <div className={styles.bottomRow}>
        <div>Sunrise</div>
        <time>{sunrise}</time>
        <div>Sunset</div>
        <time>{sunset}</time>
      </div>
    </li>
  );
}

export default Item;

Item.propTypes = {
  day: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
}
