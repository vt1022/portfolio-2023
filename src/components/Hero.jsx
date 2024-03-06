import React from 'react'
import { StyledHero } from '../styles/components/Hero.styled'

function Hero() {
  return (
    <StyledHero>
      <h1>
        vincci tsui <span className='hidden'>frontend engineer</span>
      </h1>

      <p>
        I am a (frontend) engineer on a mission to harmonize performance, design and functionality to create user experiences that
        truly stand out.
      </p>

      <p>
        Technologies I work with include JavaScript, Typescript, React, Svelte, SCSS, webpack, vite, Express, MongoDB and GraphQL
      </p>

      <p>I have experience working with E-commerce websites and McDonald's and other QSR digital menu boards.</p>
    </StyledHero>
  )
}

export default Hero
