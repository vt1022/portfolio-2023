import React from 'react'
import { StyledNavbar } from '../styles/components/Navbar.styled'

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li className='nav-btn btn'>
          <a href='#'>Home</a>
        </li>
        <li className='nav-btn btn'>
          <a href='#socials'>Socials</a>
        </li>
        <li className='nav-btn btn'>
          <a href='#projects'>Projects</a>
        </li>
      </ul>
    </StyledNavbar>
  )
}

export default Navbar
