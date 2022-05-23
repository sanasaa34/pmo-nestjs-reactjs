import { fork } from 'redux-saga/effects';
import watchUserLogin from './watchers';

export default function* startForman() {
  yield fork(watchUserLogin);
}