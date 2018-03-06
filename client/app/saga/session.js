import { take, put } from 'redux-saga/effects'
import { SESSION } from 'actions/session'

export function *setUnauthorized() {
  while (true) {
    let action = yield take(SESSION.SET_UNAUTHORIZED_ERROR)
    
    yield put({
      type: SESSION.SET_UNAUTHORIZED_ERROR
    })
  }
}