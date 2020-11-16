const CREATE_NOTE = 'NOTE::CREATE_NOTE';
const EDIT_NOTE = 'NOTE::EDIT_NOTE';
const SELECT_NOTE = 'NOTE::SELECT_NOTE';
const CLEAR_STATE = 'NOTE::CLEAR_STATE';

export const initNote = ({ id = undefined, title = '', text = '' } = {}) => ({
  id,
  title,
  text,
});

const initState = ({
  notes = [],
  selectedNote = notes[0] ? notes[0] : 1,
} = {}) => ({
  selectedNote,
  notes,
});

/* SELECTORS */
export const getSelectedNote = (state) =>
  state.notes.find((note) => note.id === state.selectedNote);
export const getNotes = (state) => state.notes;
export const getNote = (notes, id) => notes.find((note) => note.id === id);
export const getText = (note) => note.text;

/* ACTIONS CREATORS */
export const createNote = (note = initNote()) => ({
  type: CREATE_NOTE,
  payload: {
    ...note,
  },
});
export const editNote = ({ id = -1, title = '', text = '' } = {}) => {
  return {
    type: EDIT_NOTE,
    payload: {
      id,
      title,
      text,
    },
  };
};
export const selectNote = (id) => ({
  type: SELECT_NOTE,
  payload: id,
});
export const clearState = () => ({
  type: CLEAR_STATE,
});

/* REDUCER */
const handleEditNote = (state, payload) => {
  const newNotesList = [...getNotes(state)];
  const selectedNote = getSelectedNote(state);
  const index = newNotesList.findIndex((note) => note.id === selectedNote.id);
  const newNote = { ...selectedNote, ...payload };
  newNotesList.splice(index, 1, newNote);

  return newNotesList;
};

const notesReducer = (
  state = initState(),
  { type = '', payload = {} } = {}
) => {
  switch (type) {
    case createNote().type:
      return {
        ...state,
        notes: [...state.notes, initNote(payload)],
      };
    case editNote().type:
      return {
        ...state,
        notes: handleEditNote(state, payload),
      };
    case selectNote().type:
      return {
        ...state,
        selectedNote: payload,
      };
    case clearState().type:
      return initState();
    default:
      return state;
  }
};

export default notesReducer;
