import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Heading from '../Heading';

const Card = ({ description, feelsLike, heading, icon, temp }) => (
  <div className={styles.wrapper}>
    <Heading>
      {heading}
    </Heading>
    <div className={styles.temp}>
      {temp}°
    </div>
    <div className={styles.icon}>
      {icon}
    </div>
    <div className={styles.feelsLike}>
      Feels like {feelsLike}°
    </div>
    <div className={styles.description}>
      {description}
    </div>
  </div>
);

export default Card;

Card.propTypes = {
  description: PropTypes.string.isRequired,
  feelsLike: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
}