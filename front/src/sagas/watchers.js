import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from './LoginSaga';

import * as types from '../actions';


export default function* watchUserLogin() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}