import React, { Component } from 'react'
import { connect } from 'react-redux'
import { followStock } from '../actions'

class SearchResults extends Component {
  constructor() {
    super()

    this.handleFollow = this.handleFollow.bind(this)
  }

  handleFollow() {
    this.props.followStock({
      symbol: this.props.symbol,
      company_name: this.props.company_name
    })
  }

  render() {
    return (
      <div id="search-results-card">
        <div className='row'>
          <div className='eight columns'>
            <p>{ this.props.company_name }</p>
            <p>{ this.props.symbol }</p>
          </div>

          <div className='four columns'>
            <button className='u-full-width' onClick={ this.handleFollow }>Follow</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followStock: function(params) {
      let action = followStock(params)
      dispatch( action )
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchResults)
