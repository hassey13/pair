import React, { Component } from 'react'
import { Link } from 'react-router'
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
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='four columns'>
              <label>Username</label>
              <input className='u-full-width' type="text" ref="username" /><br/>
              <label>Password</label>
              <input className='u-full-width' type="password" ref="password" /><br/>
              <label>Password Confirmation</label>
              <input className='u-full-width' type="password" ref="password_confirmation" />
              <label>Avatar URL</label>
              <input className='u-full-width' type="text" ref="avatar" /><br/>
            </div>

            <div className='four columns'>
              <label>E-Mail</label>
              <input className='u-full-width' type="text" ref="email" /><br/>
              <label>First Name</label>
              <input className='u-full-width' type="text" ref="first_name" /><br/>
              <label>Last Name</label>
              <input className='u-full-width' type="text" ref="last_name" />
              <br/><br/>
              <button className='u-full-width button-primary' type="submit">Submit</button><br/>
            </div>
          </div>
        </form>
        <Link to='login'>Log In</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)
