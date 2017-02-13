import React from 'react'
import { Link } from 'react-router'

export default function Navbar(props) {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Pair</Link></li>
        <li className="navbar-item"><Link to="/about">About</Link></li>
        <li className="navbar-item"><Link to="/discover">Discover</Link></li>
      </ul>
    </div>
  )
}
