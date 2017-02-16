import React, { Component } from 'react'


export default class StockCard extends Component {

  render() {

    return (
      <div className="card">
        <h3>{ this.props.stock.symbol }</h3>
        <p>{ this.props.stock.company_name }</p>
        <p>{ this.props.stock.data[0].value }</p>
      </div>
    )
  }
}
