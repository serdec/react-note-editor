import React from 'react';
import { connect } from 'react-redux';
import { array, func, object } from 'prop-types';
import Sidebar from './Sidebar/sidebar';
import TextArea from './TextArea/textarea';
import styles from './editor.module.scss';
import {
  getNotes,
  getSelectedNote,
  getText,
  selectNote,
} from './Notes/reducer';
import { initSaga } from './Notes/Sagas/saga-init';
import { createNoteSaga } from './Notes/Sagas/saga-create-note';
import { editNoteSaga } from './Notes/Sagas/saga-edit-note';

const noop = () => {};

const mapStateToProps = (state) => ({
  notes: getNotes(state),
  selectedNote: getSelectedNote(state),
});
const mapDispatchToProps = {
  createNote: createNoteSaga,
  editNote: editNoteSaga,
  selectNote,
  initSaga,
};

const Editor = ({
  notes = [],
  selectedNote = {},
  selectNote = noop,
  createNote = noop,
  editNote = noop,
} = {}) => {
  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <Sidebar
          notes={notes}
          selectedNoteId={selectedNote.id}
          selectNote={selectNote}
          createNote={createNote}
        />
        <TextArea
          textValue={getText(selectedNote)}
          editNote={editNote}
          selectedNoteId={selectedNote.id}
        />
      </div>
    </div>
  );
};

Editor.propTypes = {
  notes: array,
  selectedNote: object,
  selectNote: func,
  createNote: func,
  editNote: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
