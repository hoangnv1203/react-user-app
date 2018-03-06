import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

import LinkButton from 'components/Button/LinkButton'
import AuthRequired from 'components/AuthRequired'

//@AuthRequired
@connect()
@Radium
class Preview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
        </div>
        <div>
          <h1>Preview</h1>
          <LinkButton link="/checkout">Checkout</LinkButton>
          <LinkButton link="/edit-produce/1/detail">Edit produce</LinkButton>
        </div>
      </div>
    )
  }
}

export default Preview
