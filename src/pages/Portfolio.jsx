import React from 'react'
import { Card, StyledPortfolio } from '../styles/pages/Portfolio.styled'
import projects from '../utils/projects'

function Portfolio() {
  return (
    <StyledPortfolio>
      <h3>Portfolio</h3>
      {projects.map(({ title, live, repo, desc, image }, i) => {
        return (
          <Card key={i}>
            <img src={image} alt='' loading='lazy' />
            <h3>{title}</h3>
            <p>{desc}</p>
          </Card>
        )
      })}
    </StyledPortfolio>
  )
}

export default Portfolio
