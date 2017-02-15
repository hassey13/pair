import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Profile extends Component {
  render() {
    return (
      <div className='profile'>

        <div className='sidepanel'>
          <div className='sidepanel__avatar'></div>
          <p className='sidepanel__fullName'>Full Name</p>
          <p className='sidepanel__username'>Username</p>
          <Link className='sidepanel__followers'>Followers</Link>
          <Link className='sidepanel__following'>Following</Link>
          <p className='sidepanel__bio'>WAKAWAKAWAKAWAKAWAKA</p>
          <div className='iconRow'>
            <div className='iconRow__icon'></div>
          </div>
        </div>



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
