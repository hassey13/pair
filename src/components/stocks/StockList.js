import React, { Component } from 'react'

// import { bindActionCreators } from 'redux'

import {connect} from 'react-redux'

import StockCard from './StockCard'

import { fetchStocksOwned, followStock } from '../../actions/index'

class StockList extends Component {

  componentDidMount() {
    this.props.fetchStocksOwned()
  }

  render() {
    var stockList = this.props.stocks
    if (stockList.length === 0 || 'na' in stockList) {
      return (<div></div>)
    }

    return (
      <div>
        { stockList.map( ( stock, i ) => <StockCard key={i} stock={ stock } follow={ this.props.followStock }/> ) }
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
    fetchStocksOwned: function() {
      let action = fetchStocksOwned()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( StockList )
