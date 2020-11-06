import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

const Item = ({ date, minTemp, maxTemp, sunrise, sunriseText, sunset, sunsetText }) => {
  function toggleOpen(e) {
    e.currentTarget.classList.toggle(styles.open);
  }

  return (
    <li className={styles.item}>
      <button onClick={toggleOpen}>
        <span className={styles.topRow}>
          <span className={styles.date}>{date}</span>
          <span className={styles.maxTemp}>{maxTemp}</span>
          <span className={styles.minTemp}>{minTemp}</span>
        </span>
        <span className={styles.bottomRow}>
          <span>{sunriseText}</span>
          <span className={styles.time}>{sunrise}</span>
          <span>{sunsetText}</span>
          <span className={styles.time}>{sunset}</span>
        </span>
      </button>
    </li>
  );
}

export default Item;

Item.propTypes = {
  date: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunriseText: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  sunsetText: PropTypes.string.isRequired,
}
