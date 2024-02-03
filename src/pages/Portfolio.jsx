import React from 'react'
import { Card, StyledPortfolio } from '../styles/pages/Portfolio.styled'
import projects from '../utils/projects'

function Portfolio() {
  return (
    <StyledPortfolio>
      {/* <h3>Portfolio</h3> */}
      <div className='container'>
        {projects.map(({ title, live, repo, desc, image, skills }, i) => {
          return (
            <Card key={i}>
              <div className='info'>
                <h3>{title}</h3>
                <a target='_blank' rel='noopener' href={live} aria-label={`${title} demo`}>
                  demo
                </a>{' '}
                .{' '}
                <a target='_blank' rel='noopener' href={repo} aria-label={`${title} code`}>
                  github
                </a>
                <p>{desc}</p>
                <div className='stack'>
                  {skills.map(skill => (
                    <img src={skill} loading='lazy' />
                  ))}
                </div>
              </div>

              <img src={image} alt='' loading='lazy' />
            </Card>
          )
        })}
      </div>
    </StyledPortfolio>
  )
}

export default Portfolio
