import React, { Component } from 'react'
import { connect } from 'react-redux'


class FollowingCard extends Component {

  handleClick(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="card-following" onClick={ this.handleClick.bind(this) }>
        <img className='sidepanel__avatar' src="profile_pic.png" alt='Profile Image'/>
        <div className="card-text">
            <p>Simon</p>
            <p>SimonSez123</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

function mapDispatchToProps(dispatch){
  return {

  }
}

export default connect( mapStateToProps, mapDispatchToProps )( FollowingCard )
