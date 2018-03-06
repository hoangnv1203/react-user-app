import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

import LinkButton from 'components/Button/LinkButton'
import AuthRequired from 'components/AuthRequired'

//@AuthRequired
@connect()
@Radium
class Detail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
        </div>
        <div>
          <h1>ProduceCreateDetail</h1>
          <LinkButton link="/create-produce/preview">Produce Create Preview</LinkButton>
        </div>
      </div>
    )
  }
}

export default Detail
