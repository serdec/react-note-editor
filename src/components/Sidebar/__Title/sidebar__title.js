import React from 'react';
import styles from '../sidebar.module.scss';

const Sidebar__Title = ({ title = '', selected = false } = {}) => (
  <div className={styles.sidebar__title}></div>
);

export default Sidebar__Title;
