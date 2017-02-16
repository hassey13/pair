import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { queryStocks } from '../actions'

class Search extends React.Component {
  constructor() {
    super()

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput() {
    let query = this.refs.search.value
    this.props.queryStocks(query)
  }

  render() {
    // let stocks = this.props.stocks
    return <input id='search' type='text' ref='search' onChange={ this.handleInput } />
  }
}

export const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ queryStocks }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
