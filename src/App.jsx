import './App.css'
import { AppContainer } from './styles/App.styled'
import { GlobalStyle } from './styles/GlobalStyle'
import Hero from './pages/Hero'
import Portfolio from './pages/Portfolio'
import Footer from './pages/Footer'

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Hero />
      <Portfolio />
      <Footer />
    </AppContainer>
  )
}

export default App
