import { put, call, takeEvery } from 'redux-saga/effects';
import { createNote, initNote } from '../reducer';
import { url } from './saga-init';

const CREATE_NOTE_SAGA = 'SAGA::CREATE_NOTE_SAGA';

export const createNoteSaga = () => ({
  ...createNote(),
  type: CREATE_NOTE_SAGA,
});

const createNoteInDb = async (note) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
function* handleCreateNoteSaga() {
  try {
    const note = yield call(createNoteInDb, initNote());
    yield put(createNote(note));
  } catch (e) {
    console.log(e);
  }
}
export function* watchCreateNote() {
  yield takeEvery(createNoteSaga().type, handleCreateNoteSaga);
}
