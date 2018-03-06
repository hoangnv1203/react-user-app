import { fork } from 'redux-saga/effects'

import { historyPush, historyPop  } from 'saga/history'
import { signIn, signUp, signOut } from 'saga/auth'
import { getTags, getTemplates } from 'saga/produce'

function *root() {
  yield fork(historyPush)
  yield fork(historyPop)
  yield fork(signIn)
  yield fork(signUp)
  yield fork(signOut)
  yield fork(getTags)
  yield fork(getTemplates)
}

export default root
