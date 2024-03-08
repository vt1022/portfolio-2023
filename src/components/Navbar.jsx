import React from 'react'
import { StyledNavbar } from '../styles/components/Navbar.styled'
import icon from '../assets/favicon.png'

function Navbar({ inView }) {
  // inView: 'home' / 'socials' / 'portfolio'

  return (
    <StyledNavbar>
      <div className='title'>vincci</div>
      <ul>
        <li className={`nav-btn btn ${inView === 'home' ? 'active' : ''}`}>
          <a href='#'>Home</a>
        </li>
        <li className={`nav-btn btn ${inView === 'socials' ? 'active' : ''}`}>
          <a href='#socials'>Socials</a>
        </li>
        <li className={`nav-btn btn ${inView === 'portfolio' ? 'active' : ''}`}>
          <a href='#projects'>Projects</a>
        </li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
