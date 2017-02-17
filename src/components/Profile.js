import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import StockList from './stocks/StockList'
import { getCurrentUser } from '../actions'

export class Profile extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  handleEdit(user) {
    browserHistory.push({
      pathname: "/edit",
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email
      }
    })
  }

  render() {
    const user = this.props.user

    return (
      <div className='profile row'>
        <div className='sidepanel four columns'>
          <img
            src="profile_pic.png"
            alt="profile_pic"
            className='sidepanel__avatar'
          />
          <p className='sidepanel__fullName'>
            { `${ user.first_name } ${ user.last_name }` }
          </p>
          <p className='sidepanel__username'>{ user.username }</p>

          <div className=' sidepanel__follow sidepanel__followers'>
            <Link>Friends</Link>
          </div>

          <div className='iconRow'>
            <div className='iconRow__icon'></div>
          </div>

          <button
            className='button-primary'
            onClick={ this.handleEdit.bind(this, user) } >
              Edit Profile
          </button>
        </div>

        <div className='infopanel eight columns'>
          <StockList />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: function() {
      let action = getCurrentUser()
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
