import { put, call, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import { editNote } from '../reducer';
import { url } from './saga-init';

/* EDIT IN DB */
const DB_EDIT_NOTE_SAGA = 'SAGA::EDIT_NOTE_SAGA';

const dbEditNoteSaga = (payload = {}) => ({
  ...editNote(payload),
  type: DB_EDIT_NOTE_SAGA,
});

const dbEditNote = async (note) => {
  try {
    const response = await fetch(`${url}${note.id}/`, {
      method: 'PUT',
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

function* handleDbEditNoteSaga(action) {
  try {
    yield call(dbEditNote, action.payload);
  } catch (e) {
    console.log(e);
  }
}
export function* watchDbEditNote() {
  yield throttle(3000, dbEditNoteSaga().type, handleDbEditNoteSaga);
}

/* HANDLE NOTE EDITING */
const EDIT_NOTE_SAGA = 'SAGA::EDIT_NOTE_SAGA';

export const editNoteSaga = (payload = {}) => ({
  ...editNote(payload),
  type: EDIT_NOTE_SAGA,
});

function* handleEditNoteSaga(action) {
  try {
    yield put(editNote(action.payload));
    // yield put(dbEditNoteSaga(action.payload));
  } catch (e) {
    console.log(e);
  }
}

export function* watchEditNote() {
  yield takeLatest(editNoteSaga().type, handleEditNoteSaga);
}
