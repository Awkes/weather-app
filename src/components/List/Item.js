import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.module.css';

const Item = ({ date, minTemp, maxTemp, sunrise, sunriseText, sunset, sunsetText }) => {
  function toggleOpen(e) {
    e.currentTarget.classList.toggle(styles.open);
  }

  return (
    <li className={styles.item} onClick={toggleOpen}>
      <div className={styles.topRow}>
        <time className={styles.date}>{date}</time>
        <div className={styles.maxTemp}>{maxTemp}</div>
        <div className={styles.minTemp}>{minTemp}</div>
      </div>
      <div className={styles.bottomRow}>
        <div>{sunriseText}</div>
        <time>{sunrise}</time>
        <div>{sunsetText}</div>
        <time>{sunset}</time>
      </div>
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
