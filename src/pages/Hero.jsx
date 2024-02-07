import React from 'react'
import { SocialsContainer, StyledHero } from '../styles/pages/Hero.styled'

function Hero() {
  return (
    <StyledHero>
      <h1>
        vincci tsui <span className='hidden'>frontend engineer</span>
      </h1>

      <p>
        I am a (frontend) engineer on a mission to harmonize performance, design and functionality to create experiences that
        truly stand out.
      </p>

      {/* <iframe
        title={'test'}
        className='frame'
        src={'https://vt1022.github.io/che-patisserie-demo'}
        style={{ border: '0px' }}
        allowFullScreen
        width={`${1920 / 2}px`}
        height={`${1080 / 2}px`}
      /> */}

      <SocialsContainer>
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
      </SocialsContainer>
    </StyledHero>
  )
}

export default Hero
