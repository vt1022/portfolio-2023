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
        <li class='button'>
          <a
            target='_blank'
            rel='noopener'
            href='https://www.linkedin.com/in/vincci-tsui-040a031a3/'
            aria-label='go to my linkedin'>
            <i class='fab fa-linkedin' aria-hidden='true'></i>
          </a>
        </li>
        {/* <li class='button'>
          <a target='_blank' rel='noopener' href='https://twitter.com/vinccimantsui' aria-label='go to my twitter'>
            <i class='fab fa-twitter-square' aria-hidden='true'></i>
          </a>
        </li> */}
        <li class='button'>
          <a target='_blank' rel='noopener' href='https://github.com/vt1022' aria-label='go to my github'>
            <i class='fab fa-github-square' aria-hidden='true'></i>
          </a>
        </li>
        <li class='button'>
          <a target='_blank' rel='noopener' href='https://calendly.com/vinccimantsui' aria-label='go to my calendly'>
            <i class='far fa-calendar-check' aria-hidden='true'></i>
          </a>
        </li>
      </SocialsContainer>
    </StyledHero>
  )
}

export default Hero
