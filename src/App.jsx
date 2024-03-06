import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Socials from './components/Socials.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import { AppContainer } from './styles/App.styled'
import { GlobalStyle } from './styles/GlobalStyle'
import './App.css'

function App() {
  const [currentYOffset, setCurrentYOffset] = useState(0)
  const [inView, setInView] = useState('')
  const [socialsRef, portfolioRef] = [useRef({}), useRef({})]

  useEffect(() => {
    const trackY = () => setCurrentYOffset(window.scrollY)
    window.addEventListener('scroll', trackY)

    // cleanup
    return () => {
      window.removeEventListener('scroll', trackY)
    }
  }, [])

  useEffect(() => {
    const getComponentTop = currRef => currRef.current.getBoundingClientRect().top + window.scrollY

    const socialsY = getComponentTop(socialsRef)
    const portfolioY = getComponentTop(portfolioRef)

    const isViewingSocials = currentYOffset >= socialsY && currentYOffset < portfolioY
    const isViewingPortfolio = currentYOffset >= portfolioY

    setInView(isViewingPortfolio ? 'portfolio' : isViewingSocials ? 'socials' : 'home')
  }, [currentYOffset])

  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar inView={inView} />
      <Hero />
      <Socials forwardRef={socialsRef} />
      <Portfolio forwardRef={portfolioRef} />
      <Footer />
    </AppContainer>
  )
}

export default App
