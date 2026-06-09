import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CursorEffect from './components/CursorEffect'
import SpaceBackground from './components/backgrounds/SpaceBackground'
import './styles/App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="app">
      <CursorEffect />
      <SpaceBackground />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="hero"><Hero setActiveSection={setActiveSection} /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
