import React, { Component } from 'react'

// import { bindActionCreators } from 'redux'

import {connect} from 'react-redux'

import { fetchStockCardData } from '../../actions/index'

class StockCard extends Component {

  componentDidMount() {
    this.props.fetchStockCardData(this.props.stock.symbol)
  }

  render() {
    return (
      <div className="stock-card">
        <h3>{ this.props.stock.symbol }</h3>
        <p>{ this.props.stock.company_name }</p>
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
    fetchStockCardData: function(ticker){
      let action = fetchStockCardData(ticker)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( StockCard )
