import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const user = this.props.user
    
    return (
      <div>
        <p>Email: { user.email }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}

export default connect(mapStateToProps, null)(Home)
