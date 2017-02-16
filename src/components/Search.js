import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { queryStocks } from '../actions'

class Search extends React.Component {
  constructor() {
    super()

    this.handleInput = this.handleInput.bind(this)
    this.handleOffFocus = this.handleOffFocus.bind(this)
  }

  handleInput() {
    let query = this.refs.search.value
    this.props.queryStocks(query)
  }

  handleoffFocus(){


  }



  render() {
    const stockSearch = this.props.stockSearch
    debugger
    return (
      <div>
        <input id='search' type='text' ref='search' onChange={ this.handleInput } onFocusOut={this.handleoffFocus}/>
        <div>{stockSearch.map((stock, i) => {return <div key={i}>
          <p>{`${stock.ticker}: ${stock.name}`}</p>
        </div>})}</div>
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
