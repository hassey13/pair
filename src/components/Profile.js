import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StockList from './stocks/StockList'
import { getCurrentUser } from '../actions'


export class Profile extends Component {
  constructor() {
    super()

    this.handleEdit = this.handleEdit.bind(this)
  }

  componentDidMount(){
    this.props.getCurrentUser()
  }

  handleEdit() {
    browserHistory.push("/edit")
  }

  render() {
    const user = this.props.user
    debugger

    return (
      <div className='profile row'>
        <div className='sidepanel four columns'>
          <div className='sidepanel__avatar'></div>


          <p className='sidepanel__fullName'>{ `${ user.first_name } ${ user.last_name }` }</p>
          <p className='sidepanel__username'>{ user.username }</p>
          <div className=' sidepanel__follow sidepanel__followers'><Link>Followers</Link></div>
          <div className='sidepanel__follow sidepanel__following'><Link>Following</Link></div>

          <div className='iconRow'>
            <div className='iconRow__icon'></div>
          </div>

          <button className='button-primary' onClick={ this.handleEdit } >Edit Profile</button>
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
