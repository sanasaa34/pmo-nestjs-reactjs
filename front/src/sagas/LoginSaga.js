import { put, call } from 'redux-saga/effects';
import {loginUserService } from '../services/LoginService';
import * as types from '../actions'


export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    console.log('payloood', response)
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })

    ];

  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, err })
  }
}