import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { nav } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(href), 100)
    } else {
      scrollToSection(href)
    }
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8, 0, 26, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(168,85,247,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="font-heading font-bold text-xl flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899)' }}
          >
            DF
          </span>
          <span className="gradient-text">Dylan Fuks</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:text-purple-400"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/CV-Dylan-Fuks.pdf"
            download="CV-Dylan-Fuks.pdf"
            className="btn-primary ml-3 text-sm"
            style={{ textDecoration: 'none' }}
          >
            Descargar CV
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-2"
          style={{ background: 'rgba(8,0,26,0.95)', backdropFilter: 'blur(16px)' }}
        >
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-left py-3 text-sm font-medium border-b"
              style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(168,85,247,0.15)' }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/CV-Dylan-Fuks.pdf"
            download="CV-Dylan-Fuks.pdf"
            className="btn-primary mt-2 text-sm text-center"
            style={{ textDecoration: 'none' }}
          >
            Descargar CV
          </a>
        </div>
      )}
    </header>
  )
}
