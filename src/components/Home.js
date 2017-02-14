import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    debugger
    return (
      <div>
        <p>{ this.props.users }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(Home)
