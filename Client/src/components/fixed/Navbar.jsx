import React from 'react'
import {NavDropdown} from 'react-bootstrap'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <NavDropdown title="Personalized" className='nav-drop'>
              <NavDropdown.Item style={{color:'red'}} href="/watchlist">Watch-List</NavDropdown.Item>
              <NavDropdown.Item style={{color:'red'}} href="/watched">Watched</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="More" className='nav-drop'>
              <NavDropdown.Item style={{color:'red'}} href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item style={{color:'red'}} href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{color:'red'}} href="/about">About</NavDropdown.Item>  
        </NavDropdown>
        <li className="nav-item"><a href="/signin">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;