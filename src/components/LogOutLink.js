import React, { Component } from 'react'
import { Link } from 'react-router'

class LogOutLink extends Component {
  constructor() {
    super()

    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut() {
    sessionStorage.removeItem('jwt')
  }

  render() {
    return <Link to='/login' onClick={ this.handleLogOut } >Log Out</Link>
  }
}

export default LogOutLink
