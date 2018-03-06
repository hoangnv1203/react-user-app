import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import history from 'reducers/history'
import session from 'reducers/session'
import auth from 'reducers/auth'
import produce from 'reducers/produce'

export default combineReducers({
  auth,
  history,
  form,
  session,
  produce
})
