import { useEffect, useState } from 'react'
import IntroVideo from './components/IntroVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Publications from './components/Publications'
import ResearchInterests from './components/ResearchInterests'
import Certifications from './components/Certifications'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [skipIntro, setSkipIntro] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setSkipIntro(true)
      setIntroDone(true)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = introDone ? 'auto' : 'hidden'
  }, [introDone])

  return (
    <div className="bg-cream text-ink">
      <div className="grain" aria-hidden="true" />
      {!skipIntro && <IntroVideo onComplete={() => setIntroDone(true)} />}

      <Navbar visible={introDone} />

      <main id="top" className={introDone ? 'opacity-100' : 'opacity-0 pointer-events-none select-none'}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Publications />
        <ResearchInterests />
        <Certifications />
        <Philosophy />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
