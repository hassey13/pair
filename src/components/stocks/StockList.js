import React, { Component } from 'react'

// import { bindActionCreators } from 'redux'

import {connect} from 'react-redux'

import StockCard from './StockCard'

import { fetchStocksOwned } from '../../actions/index'

class StockList extends Component {

  componentDidMount() {
    this.props.fetchStocksOwned()
  }

  render() {
    const stockList = this.props.stocks

     if( stockList.symbols !== undefined ) {
       return (
         <div>
         { stockList.symbols.map( ( stock, i ) => <StockCard key={i} stock={ stock } /> ) }
         </div>
       )
     }
     else {
       return (<div></div>)
     }
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

export default connect( mapStateToProps, mapDispatchToProps )( StockList )
