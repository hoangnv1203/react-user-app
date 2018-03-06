import prefix from 'helpers/prefix-map'

export const AUTH = prefix('AUTH', {
  SET_UNAUTHORIZED_ERROR: 'SET_UNAUTHORIZED_ERROR',
  CLEAR_UNAUTHORIZED_ERROR: 'CLEAR_UNAUTHORIZED_ERROR',
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_IN_ERROR: 'SIGN_IN_ERROR',
  SIGN_OUT: 'SIGN_OUT'
})

export function setUnauthorized() {
  return {
    type: AUTH.SET_UNAUTHORIZED_ERROR
  }
}

export function loginUser(account) {
  return {
    type: AUTH.SIGN_IN,
    payload: {
      account: account
    }
  }
}

export function signUp(account) {
  return {
    type: AUTH.SIGN_UP,
    payload: {
      account: account
    }
  }
}

export function signOut(token) {
  return {
    type: AUTH.SIGN_OUT,
    payload: {
      token: token
    }
  }
}