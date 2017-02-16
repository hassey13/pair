import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchResults extends Component {
  render() {

    return (
      <div id="search-results-card">
        <p>{ this.props.name }</p>
        <p>{ this.props.ticker}</p>
      </div>
    )
  }
}

export default connect(null, null)(SearchResults)
