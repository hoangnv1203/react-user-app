import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

@connect()
@Radium
class ProfileMessagePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>ProfileMessagePage</h1>
      </div>
    )
  }
}

export default ProfileMessagePage
