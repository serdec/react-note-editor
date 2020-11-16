import React from 'react';
import { array, func, number } from 'prop-types';
import styles from '../sidebar.module.scss';

const Sidebar__Notes = ({ notes = [], selectedNote, handleClick } = {}) => (
  <>
    {notes.map((note) => {
      const classSelected =
        selectedNote === note.id ? styles.sidebar__title_selected : '';
      return (
        <div
          key={note.id}
          onClick={() => {
            handleClick(note.id);
          }}
          className={`${styles.sidebar__titleContainer}`}
        >
          <div className={classSelected}></div>
          <div className={styles.sidebar__title}>{note.title}</div>
        </div>
      );
    })}
  </>
);

Sidebar__Notes.propTypes = {
  notes: array,
  selectedNote: number,
  handleClick: func,
};

export default Sidebar__Notes;
