import React, { Component } from 'react'
import { connect } from 'react-redux'

import FollowingCard from './FollowingCard'

import { fetchFollowing } from '../../actions/index'

class FollowingList extends Component {

  componentDidMount() {
    this.props.fetchFollowing()
  }

  render() {
    var followingList = this.props.friends
    if ( followingList.length === 0 ) {
      return ( <div></div> )
    }

    return (
      <div className="following-list">
        { followingList.map( ( stock, i ) => <FollowingCard key={i} following={ following } /> ) }
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
    fetchFollowing: function() {
      let action = fetchFollowing()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( FollowingList )
