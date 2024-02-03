import { useState } from 'react'
import './App.css'
import { AppContainer } from './styles/App.styled'
import { GlobalStyle } from './styles/GlobalStyle'
import Hero from './pages/Hero'
import Portfolio from './pages/Portfolio'
import Experience from './pages/Experience'

function App() {
  return (
    <AppContainer>
      <Hero />
      <Portfolio />
      <Experience />
      <GlobalStyle />
    </AppContainer>
  )
}

export default App
