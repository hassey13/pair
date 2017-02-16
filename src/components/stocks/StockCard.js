import React, { Component } from 'react'


export default class StockCard extends Component {

  render() {

    return (
      <div className="stock-card">
        <h3>{ this.props.stock.identifier }</h3>
        <p>{ this.props.stock.company_name }</p>
        <p>{ this.props.stock.data[0].value }</p>
      </div>
    )
  }
}
