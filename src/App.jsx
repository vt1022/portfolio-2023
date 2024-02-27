import './App.css'
import { AppContainer } from './styles/App.styled'
import { GlobalStyle } from './styles/GlobalStyle'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Navbar from './components/NavBar'

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Portfolio />
      <Footer />
    </AppContainer>
  )
}

export default App
