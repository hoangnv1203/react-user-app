import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import { 
  loadableContainer,
  loadableComponent
} from 'services/loadable'

import { redirect } from 'actions/routing'

import AuthRequired from 'components/AuthRequired'
let ProfileHistoryPage = loadableContainer('ProfilePage/history')
let ProfileMessagePage = loadableContainer('ProfilePage/message')
let ProfileSecurityPage = loadableContainer('ProfilePage/security')

@connect()
@AuthRequired
@Radium
class Profile extends React.Component {
  render() {
    let { match } = this.props;

    return (
      <div>
        <h1>Profile</h1>
        <button onClick={this._redirectTo.bind(this, '/profile/me')}>My Profile</button>
        <button onClick={this._redirectTo.bind(this, '/profile/me/security')}>Security</button>
        <button onClick={this._redirectTo.bind(this, '/profile/me/history')}>History</button>
        <button onClick={this._redirectTo.bind(this, '/profile/me/message')}>Message</button>
        <Route exact path={`${match.path}/:id`} component={ProfileDetail} />
        <Route exact path={`${match.path}/:id/security`} component={ProfileSecurityPage} />
        <Route exact path={`${match.path}/:id/history`} component={ProfileHistoryPage} />
        <Route exact path={`${match.path}/:id/message`} component={ProfileMessagePage} />
      </div>
    )
  }
  _redirectTo(pathname) {
    let { dispatch } = this.props

    dispatch(redirect(pathname))
  }
}

@connect()
class ProfileDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { params } = this.props.match

    return (
      <div>My profile: {params.id}</div>
    )
  }
}

export default Profile
