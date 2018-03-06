import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

import LinkButton from 'components/Button/LinkButton'
import AuthRequired from 'components/AuthRequired'

@AuthRequired
@connect()
@Radium
class ProduceEditDetailPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>ProduceEditDetailPage</h1>
        <LinkButton link="/edit-produce/1/preview">Edit Preview produce</LinkButton>
      </div>
    )
  }
}

export default ProduceEditDetailPage
