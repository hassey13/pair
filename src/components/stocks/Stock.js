import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrentStock } from '../../actions/index'



class Stock extends Component {
  componentDidMount(){
   const stockTicker = this.props.stock.ticker
   this.props.updateCurrentStock( stockTicker )
 }

  render() {
    return (
      <div>
        <h2>Stock Show Page</h2>
      </div>
    )
  }
}



function mapStateToProps(state, ownProps){
  const stock = state.stocks.find( stock => stock.ticker === state.currentStock )

  return {
    stocks: stock
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateCurrentStock: function(stockTicker){
      let action = updateCurrentStock(stockTicker)
      dispatch(action)
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)( Stock )
