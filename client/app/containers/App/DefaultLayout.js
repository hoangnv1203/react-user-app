import React from 'react'
import { Route } from 'react-router'

import Header from 'containers/App/Header'

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)

    this._renderLayout = this._renderLayout.bind(this)
  }

  render() {
    const { component: Component, ...rest } = this.props

    return (
      <Route {...rest}
        render={this._renderLayout(Component)}
      />
    )
  }

  _renderLayout(Component) {
    return (matchProps) => (
      <div id="main">
        <Header />
        <div>
          <Component {...matchProps} />
        </div>
      </div>
    )
  }
}

export default DefaultLayout
