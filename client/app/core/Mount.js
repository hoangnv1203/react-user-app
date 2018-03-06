import React from 'react'
import { Provider } from 'react-redux'

import History from 'components/History'
import Router from 'components/Router'
import App from 'containers/App'

import store from 'core/store'
import { setUnauthorized } from 'actions/auth'

let token = localStorage.getItem('token')
if (!token) {
  store.dispatch(setUnauthorized())
} 

class Mount extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <History>
          <Router component={App} />
        </History>
      </Provider>
    )
  }
}

export default Mount
