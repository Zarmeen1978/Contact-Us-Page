import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='container navbar'>
      <div className="logo">
        <img src="/images/Logo.png" alt="Do some coding logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar