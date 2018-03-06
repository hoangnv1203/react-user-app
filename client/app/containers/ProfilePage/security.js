import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

@connect()
@Radium
class ProfileSecurityPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>ProfileSecurityPage</h1>
      </div>
    )
  }
}

export default ProfileSecurityPage
