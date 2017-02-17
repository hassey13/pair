import React, { Component } from 'react'
import { connect } from 'react-redux'

import FriendCard from './FriendCard'

import { fetchFriends } from '../../actions/index'

class FriendsList extends Component {

  componentDidMount() {
    this.props.fetchFriends()
  }

  render() {
    var friendsList = this.props.friends
    if ( friendsList.length === 0 ) {
      return ( <div></div> )
    }

    return (
      <div>
        { friendsList.map( ( stock, i ) => <FriendCard key={i} friend={ friend } }/> ) }
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
    fetchFriends: function() {
      let action = fetchFriends()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( FriendsList )
