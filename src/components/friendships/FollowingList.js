import React, { Component } from 'react'
import { connect } from 'react-redux'

import FollowingCard from './FollowingCard'

import { fetchFollowing } from '../../actions/index'

class FollowingList extends Component {

  componentDidMount() {
    this.props.fetchFollowing()
  }

  render() {
    const followingList = [] // this.props.following
    if ( followingList.length === 0 ) {
      return ( <div> </div> )
    }

    return (
      <div className="following-list">
        { followingList.map( ( following, i ) => <FollowingCard key={i} following={ following } /> ) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    following: state.following
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
