import React from 'react'
import { connect } from 'react-redux'
import { queryStocks } from '../actions'
import SearchResults from './SearchResults'

class Search extends React.Component {
  constructor() {
    super()

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput() {
    let query = this.refs.search.value
    this.props.queryStocks(query)
    console.log(query)
  }

  render() {
    const stockSearch = this.props.stockSearch

    return (
      <div>
        <input id='search' type='text' ref='search' autoComplete='off' onChange={ this.handleInput } />
        <div>
          {
            stockSearch.map((stock, i) => {
              return <SearchResults key={i} ticker={ stock.ticker } name={ stock.name } />
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stockSearch: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    queryStocks: function(query) {
      let action = queryStocks(query)
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
