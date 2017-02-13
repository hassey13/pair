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
    const user = {first_name: this.refs.first_name.value, avatar: this.refs.avatar.value, last_name: this.refs.last_name.value, email: this.refs.email.value, userPassword: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}

    this.props.createUser(user)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="email" placeholder="Enter Email" /><br/><br/>
          <input type="password" ref="userPassword" placeholder="Enter Password" /><br/><br/>
          <input type="password" ref="passwordConfirmation" placeholder="Enter Password" /><br/><br/>
          <input ref="first_name" placeholder="First Name" /><br/><br/>
          <input ref="last_name" placeholder="Last Name" /><br/><br/>
          <input ref="avatar" placeholder="Avatar" /><br/><br/>
          <button type="submit">Submit</button><br/><br/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
