import React from 'react';
import PropTypes from 'prop-types';
import { main } from './Layout.module.css';

const Layout = ({ children }) => (
  <main className={main}>
    {children}
  </main>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
}