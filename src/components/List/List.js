import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import Item from './Item';
import styles from './List.module.css';

const List = ({ heading, items }) => (
  <div>
    <Heading>{heading}</Heading>
    <ul className={styles.list}>
      {items.map((item, i) => (
        <Item { ...item } key={item.day} />
      ))}
    </ul>
  </div>
);

export default List;

List.propTypes = {
  heading: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      minTemp: PropTypes.number,
      maxTemp: PropTypes.number,
      sunrise: PropTypes.string,
      sunset: PropTypes.string,
    })
  ).isRequired,
}
