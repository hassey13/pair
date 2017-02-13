import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {createUser} from '../actions/index'

class UserSignUp extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {username: this.refs.username.value, first_name: this.refs.first_name.value, avatar: this.refs.avatar.value, last_name: this.refs.last_name.value, email: this.refs.email.value, password: this.refs.password.value, password_confirmation: this.refs.password_confirmation.value}

    this.props.createUser(user)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="username" placeholder="Enter Username" /><br/>
          <input type="text" ref="email" placeholder="Enter Email" /><br/>
          <input type="password" ref="password" placeholder="Enter Password" /><br/>
          <input type="password" ref="password_confirmation" placeholder="Confirm Password" /><br/>
          <input type="text" ref="first_name" placeholder="First Name" /><br/>
          <input type="text" ref="last_name" placeholder="Last Name" /><br/>
          <input type="text" ref="avatar" placeholder="Avatar" /><br/>
          <button type="submit">Submit</button><br/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
