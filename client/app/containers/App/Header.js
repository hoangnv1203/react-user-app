import Radium from 'radium'
import React from 'react'
import BurgerMenu from 'react-burger-menu'
import { connect } from 'react-redux'

import { redirect } from 'actions/routing'
import { signOut } from 'actions/auth'

import style from './Header.style'

@connect(state => ({
  unauthorized: state.auth.unauthorized,
  username: state.auth.username,
  token: state.auth.token
}))
@Radium
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.redirect = this.redirect.bind(this)
    this._signOut = this._signOut.bind(this)
  }

  render() {
    const { unauthorized } = this.props

    return (
      <div style={style.header}>
        {this.getLeftMenu()}
        { unauthorized ? null : this.getRightMenu() }
        <div style={style.items}>
          <div style={style.leftItem}>
            <span>&nbsp;</span>
          </div>
          <div>
            <span>Logo</span>
          </div>
          <div style={style.rightItem}>
            { unauthorized ? <a onClick={this.redirect.bind(this, '/sign-in')}>Sign In</a> : <span>&nbsp;</span>
            }
          </div>
        </div>
      </div>
    )
  }

  getRightMenu() {
    const Menu = BurgerMenu.slide

    const items = this.getRightItems()

    return (
      <Menu right
        outerContainerId="main"
        styles={style.rightMenu}
        width={200}
        customCrossIcon={false}>
        {items}
      </Menu>
    )
  }

  getRightItems() {
    return [
      <a key="0" onClick={this.redirect.bind(this, '/profile/me/message')}>Inbox</a>,
      <a key="1" onClick={this.redirect.bind(this, '/profile/me')}>Profile</a>,
      <a key="2" onClick={this._signOut}>Sign Out</a>,
    ]
  }

  getLeftMenu() {
    const Menu = BurgerMenu.slide

    const items = this.getLeftItems()

    return (
      <Menu left
        outerContainerId="main"
        styles={style.leftMenu}
        width={200}
        customCrossIcon={false}>
        {items}
      </Menu>
    )
  }

  getLeftItems() {
    return [
      <a key="0" onClick={this.redirect.bind(this, '/')}>Home</a>,
      <a key="1" onClick={this.redirect.bind(this, '/create-produce/overview')}>Create produce</a>,
      <a key="2" onClick={this.redirect.bind(this, '/produces')}>Products</a>,
      <a key="3" onClick={this.redirect.bind(this, '/about')}>About</a>
    ]
  }

  redirect(pathname) {
    const { dispatch } = this.props

    dispatch(redirect(pathname))
  }

  _signOut() {
    const { dispatch, token } = this.props

    dispatch(signOut(token))
  }
}

export default Header
