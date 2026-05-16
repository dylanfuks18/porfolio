import Navbar from '../components/Navbar'
import ParticlesBg from '../components/ParticlesBg'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <div className="relative" style={{ background: 'var(--bg)' }}>
      {/* Fondo de estrellas (fijo, detrás de todo) */}
      <ParticlesBg />

      {/* Contenido principal (sobre las partículas) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}
