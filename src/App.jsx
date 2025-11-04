import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import SEO from './components/SEO'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'stats', 'projects', 'blog', 'contact']
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ErrorBoundary>
      <SEO />
      <div className="min-h-screen bg-white">
        <Header activeSection={activeSection} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Stats />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  )
}

export default App



