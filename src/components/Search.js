import React from 'react'
import { connect } from 'react-redux'
import { queryStocks } from '../actions'
import SearchResults from './SearchResults'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      removeResults: true
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleInput() {
    this.setState({ removeResults: false })
    this.queryUnlessBlank()
  }

  handleBlur() {
    setTimeout(()=>{ this.setState({ removeResults: true }) }, 100)

    console.log(`Blur ${ this.state.removeResults }`)
  }

  handleFocus() {
    this.queryUnlessBlank()
    console.log(`Focus ${ this.state.removeResults }`)
  }

  queryUnlessBlank() {
    const query = this.refs.search.value
    if(query !== ''){
      this.setState({ removeResults: false })
      this.props.queryStocks(query)
    } else {
      this.setState({ removeResults: true })
    }
  }

  render() {
    const stockSearch = this.props.stockSearch
    let searchComponent = null

    if(this.state.removeResults){
      searchComponent = null
    } else {
      searchComponent = (
        <div >
          {
            stockSearch.map((stock, i) => {
              return <SearchResults key={i} symbol={ stock.ticker } company_name={ stock.name } />
            })
          }
        </div>
      )
    }

    return (
      <div>
        <input id='search' type='text' ref='search' autoComplete='off' onChange={ this.handleInput } onFocus={ this.handleFocus } onBlur={ this.handleBlur }/>
        { searchComponent }
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
