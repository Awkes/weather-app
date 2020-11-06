import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import Item from './Item';
import styles from './List.module.css';

const List = ({ heading, items, sunriseText, sunsetText }) => (
  <div>
    <Heading>{heading}</Heading>
    <ul className={styles.list}>
      {items.map((item, i) => (
        <Item 
          { ...item } 
          key={item.date} 
          sunriseText={sunriseText} 
          sunsetText={sunsetText} 
        />
      ))}
    </ul>
  </div>
);

export default List;

List.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      minTemp: PropTypes.string,
      maxTemp: PropTypes.string,
      sunrise: PropTypes.string,
      sunset: PropTypes.string,
    })
  ).isRequired,
  sunriseText: PropTypes.string.isRequired,
  sunsetText: PropTypes.string.isRequired,
}
