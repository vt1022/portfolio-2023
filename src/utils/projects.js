import imageChe from '../assets/mock-che-patisserie.jpg'
import imageSvelte from '../assets/mock-svelte-portfolio.jpg'

const projects = [
  {
    title: 'Ché Patisserie',
    live: 'https://vt1022.github.io/che-patisserie-demo/',
    repo: 'https://github.com/vt1022/che-patisserie-demo',
    desc: 'Mobile-first E-commerce website built with React. Integration with Google Sheets for content management and Discord for notifications',
    skills: 'React, JavaScript, Sass, Html',
    image: imageChe
  },
  {
    title: 'Svelte Portfolio',
    live: 'https://vt1022.github.io/portfolio-2022/',
    repo: 'https://github.com/vt1022/portfolio-2022',
    desc: 'The design concept is to make it look like VS Code as it is the main tool of a developer',
    skills: 'Svelte, TypeScript, Css, Html',
    image: imageSvelte
  }
]

export default projects
