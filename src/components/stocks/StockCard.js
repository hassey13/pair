import React, { Component } from 'react'
// import UnfollowStockButton from './UnfollowStockButton'
import {connect} from 'react-redux'
import { unfollowStock } from '../../actions/index'

class StockCard extends Component {

  handleSubmit(event) {
    event.preventDefault()
    this.props.unfollowStock({symbol: this.props.stock.identifier})
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <button type="submit" className="btn-clear">x</button>
        </form>

        <div className="card-text">
          <h3>{ this.props.stock.identifier }</h3>
          <p>{ this.props.stock.company_name }</p>

          <table>
            <tr>
              <td>Open:</td>
              <td>{ this.props.stock.data[0].open }</td>
              <td>Close:</td>
              <td>{ this.props.stock.data[0].close }</td>
            </tr>
            <tr>
              <td>High:</td>
              <td>{ this.props.stock.data[0].high }</td>
              <td>Low:</td>
              <td>{ this.props.stock.data[0].low }</td>
            </tr>
            <tr>
              <td>Market Cap:</td>
              <td>{ this.props.stock.data[0].market_cap }</td>
            </tr>
          </table>

        </div>
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
    unfollowStock: function(params) {
      let action = unfollowStock(params)
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( StockCard )
