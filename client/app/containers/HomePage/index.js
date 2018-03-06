import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

import styles from './styles'

import { redirect } from 'actions/routing'

@connect((state) => ({
  username: state.auth.username
}))
@Radium
class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.redirect = this.redirect.bind(this)
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>HomePage {this.props.username}</h1>
      </div>
    )
  }

  redirect(pathname) {
    let { dispatch } = this.props

    dispatch(redirect(pathname))
  }
}

export default HomePage
