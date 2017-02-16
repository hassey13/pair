import React, { Component } from 'react'
import {connect} from 'react-redux'

class LiveTicker extends Component {

  render() {
    return (
      <div className="card">

      </div>
    )
  }
  }

  const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
  }

  function mapDispatchToProps(dispatch){
  return {
    
  }
  }

  export default connect( mapStateToProps, mapDispatchToProps )( LiveTicker )
