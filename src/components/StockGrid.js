import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import Stock from './Stock'

import { fetchStocksOwned } from '../actions/index'

class StockGrid extends Component {

  componentDidMount() {
    this.props.fetchStocksOwned()
  }

  render() {
    const stocks = this.props.stocks
    return (
      <div>
        { stocks.map( ( stock, i ) => <Stock key={i} stock={ stock } /> ) }
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
    fetchStocksOwned: function(){
      let action = fetchStocksOwned()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( StockGrid )
