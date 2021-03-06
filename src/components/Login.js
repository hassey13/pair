import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginUser } from '../actions/index'

class Login extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()

    const credentials = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    this.props.loginUser(credentials)
    debugger
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
          <form onSubmit={ this.handleSubmit }>
            <div className='row'>
              <div className='four columns'>
                <label>E-mail</label>
                <input className='u-full-width' type='text' ref='email'/>
                <br/>
                <label>Password</label>
                <input className='u-full-width' type='password' ref='password'/>
                <br/><br/>
                <button className='u-full-width button-primary' type='submit'>Login</button>
              </div>
            </div>
          </form>
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginUser }, dispatch)
}

export default connect( mapDispatchToProps, mapDispatchToProps)(Login)
