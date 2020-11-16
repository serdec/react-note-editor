// eslint-disable-next-line
import { all } from 'redux-saga/effects';
import { watchCreateNote } from '../components/Notes/Sagas/saga-create-note';
import {
  watchDbEditNote,
  watchEditNote,
} from '../components/Notes/Sagas/saga-edit-note';
import { watchInit } from '../components/Notes/Sagas/saga-init';

export default function* rootSaga() {
  yield all([
    watchInit(),
    watchCreateNote(),
    watchEditNote(),
    watchDbEditNote(),
  ]);
}
