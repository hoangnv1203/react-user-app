import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

@connect()
@Radium
class AboutPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>AboutPage</h1>
      </div>
    )
  }
}

export default AboutPage
