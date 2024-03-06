import React from 'react'
import { StyledSocials } from '../styles/components/Socials.styled'

export default function Socials({ forwardRef }) {
  return (
    <StyledSocials id='socials' ref={forwardRef}>
      <li className='button'>
        <a target='_blank' rel='noopener' href='mailto:vincci.tsui22@gmail.com' aria-label='email me'>
          <i className='fa-solid fa-at' />
        </a>
      </li>
      <li className='button'>
        <a
          target='_blank'
          rel='noopener'
          href='https://www.linkedin.com/in/vincci-tsui-040a031a3/'
          aria-label='go to my linkedin'>
          <i className='fab fa-linkedin' aria-hidden='true' />
        </a>
      </li>
      <li className='button'>
        <a target='_blank' rel='noopener' href='https://github.com/vt1022' aria-label='go to my github'>
          <i className='fab fa-github-square' aria-hidden='true' />
        </a>
      </li>
      <li className='button'>
        <a target='_blank' rel='noopener' href='https://calendly.com/vinccimantsui' aria-label='go to my calendly'>
          <i className='far fa-calendar-check' aria-hidden='true' />
        </a>
      </li>
    </StyledSocials>
  )
}
