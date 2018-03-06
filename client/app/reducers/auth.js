import { AUTH } from 'actions/auth'

const initialState = {
  unauthorized: false,
  token: null,
  username: null,
  signUpSuccess: false,
  signInError: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH.SET_UNAUTHORIZED_ERROR:
      return Object.assign({}, state, {
        unauthorized: true,
        token: null
      })
    case AUTH.CLEAR_UNAUTHORIZED_ERROR:
      return Object.assign({}, state, {
        unauthorized: false,
        token: action.payload.token,
        username: action.payload.username
      })
    case AUTH.SIGN_UP_SUCCESS:
      return Object.assign({}, state, {
        signUpSuccess: true
      })
    case AUTH.SIGN_IN_ERROR:
      return Object.assign({}, state, {
        signInError: true
      })
  }

  return state
}