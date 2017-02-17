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
    this.getSearchComponent = this.getSearchComponent.bind(this)
  }

  handleInput() {
    this.setState({ removeResults: false })
    this.queryUnlessBlank()
  }

  handleBlur() {
    setTimeout(()=>{ this.setState({ removeResults: true }) }, 250)

    console.log(`Blur ${ this.state.removeResults }`)
  }

  handleFocus() {
    this.queryUnlessBlank()
    console.log(`Focus ${ this.state.removeResults }`)
  }

  render() {
    const stockSearch = this.props.stockSearch
    const searchComponent = this.getSearchComponent(stockSearch)

    return (
      <div id='search-nav'>
        <input
          id='search'
          type='text'
          ref='search'
          autoComplete='off'
          onChange={ this.handleInput }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
        />

        { searchComponent }
      </div>
    )
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

  getSearchComponent(stockSearch){
    let component = null

    if(!this.state.removeResults){
      component = (
        <div >
          {
            stockSearch.map((stock, i) => {
              return <SearchResults key={i} symbol={ stock.ticker } company_name={ stock.name } />
            })
          }
        </div>
      )
    }

    return component
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
