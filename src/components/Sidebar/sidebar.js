import React, { useEffect, useState } from 'react';
import { array, number, func } from 'prop-types';
import styles from './sidebar.module.scss';

const noop = () => {};
const Sidebar = ({
  notes = [],
  selectedNoteId = 1,
  selectNote = noop,
  createNote = noop,
}) => {
  const [sidebarNotes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(1);
  // Handle hydration with static generated page
  useEffect(() => {
    setNotes(notes);
    setSelectedNote(selectedNoteId);
  }, [notes, selectedNoteId]);

  const handleClick = (id) => {
    selectNote(id);
  };

  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.sidebar__createNote} ${styles.sidebar__titleContainer}`}
        onClick={createNote}
      >
        <span className={styles.sidebar__plus}>+</span>
        <span className={styles.sidebar__newNote}>New Note</span>
      </div>
      {sidebarNotes.map((note) => {
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
    </div>
  );
};

Sidebar.propTypes = {
  notes: array,
  selectedNoteId: number,
  selectNote: func,
  createNote: func,
};
export default Sidebar;
