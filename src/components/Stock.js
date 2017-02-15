import React, { Component } from 'react'

export default class Stock extends Component {
  constructor() {
    super()

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
