import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

import { loginUser } from 'actions/auth'
import LinkButton from 'components/Button/LinkButton'

@connect((state) => ({
  signUpSuccess: state.auth.signUpSuccess,
  signInError: state.auth.signInError
}))
@Radium
class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this._handleChange = this._handleChange.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        {this.props.signUpSuccess ? <p>Sign-up success, please sing-in!</p> : ''}
        {this.props.signInError ? <p>Error username or password incorrect. Please try again</p> : ''}
        <br />
        <div>
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
            <input type="submit" 
              value="Submit"
              onClick={this._handleSubmit} />
          </form>
        </div>
        <br />
        <LinkButton link="/sign-up">Sign Up</LinkButton>
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
    
    dispatch(loginUser({
      username: this.state.username,
      password: this.state.password
    }))
  }
}

export default SignIn
