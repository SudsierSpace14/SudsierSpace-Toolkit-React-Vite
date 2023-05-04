import './styles/App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
