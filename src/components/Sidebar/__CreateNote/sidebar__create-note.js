import React from 'react';
import { func } from 'prop-types';
import styles from '../sidebar.module.scss';

const Sidebar__CreateNote = ({ createNote }) => (
  <div
    className={`${styles.sidebar__createNote} ${styles.sidebar__titleContainer}`}
    onClick={createNote}
  >
    <span className={styles.sidebar__plus}>+</span>
    <span className={styles.sidebar__newNote}>New Note</span>
  </div>
);

Sidebar__CreateNote.propTypes = {
  createNote: func,
};
export default Sidebar__CreateNote;
