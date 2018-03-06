import { take, put, call } from 'redux-saga/effects'
import { AUTH } from 'actions/auth'

import { redirect } from 'actions/routing'
import { signInApi, signUpApi, signOutApi } from 'services/rest'

export function *signIn() {
  while(true) {
    let action = yield take(AUTH.SIGN_IN)
    
    let result = yield call(signInApi, action.payload.account)
    
    if (result.token && result.success) {
      yield put({
        type: AUTH.CLEAR_UNAUTHORIZED_ERROR,
        payload: {
          token: result.token,
          username: result.data.username
        }
      })

      yield put(redirect('/'))
    } else {
      yield put({
        type: AUTH.SIGN_IN_ERROR
      })
    }
  }
}

export function *signUp() {
  while(true) {
    let action = yield take(AUTH.SIGN_UP)
    
    let result = yield call(signUpApi, action.payload.account)

    if (result.success) {
      yield put({
        type: AUTH.SIGN_UP_SUCCESS
      })

      yield put(redirect('sign-in'))
    }
  }
}

export function *signOut() {
  while(true) {
    let action = yield take(AUTH.SIGN_OUT)
    
    let result = yield call(signOutApi, action.payload.token)

    if (result.success) {
      yield put({
        type: AUTH.SET_UNAUTHORIZED_ERROR
      })
      yield put(redirect('sign-in'))
    }
  }
}