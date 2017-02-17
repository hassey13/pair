import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchFriends } from '../../actions/index'

class FriendCard extends Component {

  handleClick(event) {
    event.preventDefault()
    this.props.fetchFriends()
  }

  render() {
    return (
      <div className="friend-card" onClick={ this.handleClick.bind(this) }>
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
    friends: state.friends
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchFriends: function(params) {
      let action = fetchFriends(params)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( FriendCard )
