import { useState } from 'react'
import './App.css'
import { Hero, AboutMe } from './pages/'
import Experience from './pages/Experience'
import Portfolio from './pages/Portfolio'
import { AppContainer } from './styles/App.styled'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContainer>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Experience />
      <GlobalStyle />
    </AppContainer>
  )
}

export default App
