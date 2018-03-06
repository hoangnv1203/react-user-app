import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

import { signUp } from 'actions/auth'
import LinkButton from 'components/Button/LinkButton'

@connect()
@Radium
class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      email: '',
      address: ''
    }

    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <label>
          User name:
          <input type="text"
              value={this.state.username}
              onChange={this._handleChange}
              name="username" />
          </label>
          <br />
          <br />
          <label>
          Password:
          <input type="password"
              value={this.state.password}
              onChange={this._handleChange}
              name="password" />
          </label>
          <br />
          <br />
          <label>
          Email:
          <input type="email"
              value={this.state.email}
              onChange={this._handleChange}
              name="email" />
          </label>
          <br />
          <br />
          <label>
          Address:
          <input type="text"
              value={this.state.address}
              onChange={this._handleChange}
              name="address" />
          </label>
          <br />
          <br />
          <input type="submit"
            value="Submit"
            onClick={this._handleSubmit} />
        </form>
        <br />
        <LinkButton link="/sign-in">Sign In</LinkButton>
      </div>
    )
  }

  _handleChange(event) {
    const target = event.target
    const name = target.name

    this.setState({
      [name]: target.value
    })
  }

  _handleSubmit(event) {
    event.preventDefault()
    let { dispatch } = this.props

    dispatch(signUp({
      username: this.state.username,
      password: this.state.password
    }))
  }
}

export default SignUp
