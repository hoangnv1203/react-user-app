import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from 'core/reducer'
import rootSaga from 'core/saga'

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let sagaMiddleware = createSagaMiddleware()

let store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga)

export default store
