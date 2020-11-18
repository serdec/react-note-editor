import React, { useEffect, useState } from 'react';
import { array, number, func } from 'prop-types';
import styles from './sidebar.module.scss';
import Sidebar__CreateNote from './__CreateNote/sidebar__create-note';
import Sidebar__Notes from './__Notes/sidebar__notes';

const noop = () => { };
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
      <Sidebar__CreateNote createNote={createNote} />
      <Sidebar__Notes
        notes={sidebarNotes}
        handleClick={handleClick}
        selectedNote={selectedNote}
      />
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
