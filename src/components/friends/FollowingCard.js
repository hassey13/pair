import React, { Component } from 'react'
import {connect} from 'react-redux'


class FollowingCard extends Component {

  handleClick(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="card-following" onClick={ this.handleClick.bind(this) }>
        <img src="profile_pic.png" className='sidepanel__avatar' />
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
