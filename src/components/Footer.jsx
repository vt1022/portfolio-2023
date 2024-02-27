import React from 'react'
import { StyledFooter } from '../styles/components/Footer.styled'
import footerImage from '../assets/rx78.png'

function Footer() {
  return (
    <StyledFooter>
      <img src={footerImage} aria-label='image of my favourite hobby - gundam'/>
      <div className='info'>
        <p>Thanks for the looking</p>
        <a href='mailto:vincci.tsui22@gmail.com'>vincci.tsui22@gmail.com</a>
        <p>© Vincci Tsui 2023</p>
      </div>
    </StyledFooter>
  )
}

export default Footer
