import { all, put, call, takeEvery } from 'redux-saga/effects';
import { createNote, clearState } from '../reducer';

export const url = 'http://localhost:8000/api/notes/';
/* INIT */
const INIT_SAGA = 'SAGA::INIT_SAGA';
export const initSaga = () => ({
  type: INIT_SAGA,
});
const getNotes = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
function* handleInit() {
  try {
    const notes = yield call(getNotes);
    yield put(clearState());
    yield all(notes.map((note) => put(createNote(note))));
  } catch (e) {
    console.log(e);
  }
}
export function* watchInit() {
  yield takeEvery(initSaga().type, handleInit);
}
