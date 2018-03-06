import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

import AuthRequired from 'components/AuthRequired'

@AuthRequired
@connect()
@Radium
class CheckoutPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>CheckoutPage</h1>
      </div>
    )
  }
}

export default CheckoutPage
