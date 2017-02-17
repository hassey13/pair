import React from 'react'
import { Link } from 'react-router'
import Search from './Search'
import LogOutLink from './LogOutLink'

export default function Navbar(props) {
  if(sessionStorage.length === 0){
    return <div></div>
  }

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/profile"><img id='nav-logo' src='pear.png' alt='logo'/></Link></li>
        <li className="navbar-item"><Link >About</Link></li>
        <li className="navbar-item"><Link to="/discover">Discover</Link></li>
        <li className="navbar-item"><LogOutLink/></li>
        <li className="navbar-item"><Search/></li>
      </ul>
    </div>
  )
}
