import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Profile extends Component {
  render() {
    return (
      <div className='profile'>

        <div className='profile__name'>

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
