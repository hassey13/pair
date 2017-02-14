import React, { Component } from 'react'

import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="clear-navbar"></div>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
