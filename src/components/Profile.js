import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

export class Profile extends Component {
  render() {
    return (
      <div className='profile row'>

        <div className='sidepanel four columns'>
          <div className='sidepanel__avatar'></div>

          <p className='sidepanel__fullName'>Full Name</p>
          <p className='sidepanel__username'>Username</p>
          <div className=' sidepanel__follow sidepanel__followers'><Link>Followers</Link></div> <div className='sidepanel__follow sidepanel__following'><Link>Following</Link></div>


          <div className='iconRow'>
            <div className='iconRow__icon'></div>
          </div>
          <button className='button-primary'>Edit Profile</button>
        </div>
        <div className='infopanel eight columns'>test</div>




      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {

  }
}

export const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
