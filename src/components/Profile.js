import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import { StockList } from './stocks/StockList'

export class Profile extends Component {
  render() {
    const user = this.props.user

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

          <button className='button-primary'>Edit Profile</button>
        </div>

        <div className='infopanel eight columns'>
        </div>

      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, null)(Profile)
