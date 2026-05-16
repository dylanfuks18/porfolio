import { useState, useRef } from 'react'
import Confetti from '../Confetti'
import { hero } from '../../data/content'

// ─── Iconos SVG reales con gradiente metálico ────────────────────────────────
const METAL_ID = 'metal-grad'

function MetalDefs() {
  return (
    <defs>
      <linearGradient id={METAL_ID} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="25%"  stopColor="#e879f9" />
        <stop offset="50%"  stopColor="#a855f7" />
        <stop offset="75%"  stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  )
}

function IconBehance() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill={`url(#${METAL_ID})`}>
      <MetalDefs />
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.509 1.688 1.350 1.688.396 0 .776-.182 1.014-.51h3.392zm-5.246-5.339c-.088-.767-.453-1.275-1.248-1.275-.797 0-1.262.494-1.42 1.275h2.668zM3 19.5V4.5h5.901c3.674 0 5.586 1.86 5.586 4.297 0 1.47-.74 2.678-1.946 3.3C14.2 12.7 15 14.04 15 15.6c0 2.67-1.98 3.9-5.28 3.9H3zm3.06-8.82h2.34c1.26 0 1.98-.6 1.98-1.68 0-1.02-.66-1.62-1.92-1.62H6.06v3.3zm0 6.06h2.76c1.44 0 2.22-.66 2.22-1.86 0-1.14-.84-1.8-2.28-1.8H6.06v3.66z"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill={`url(#${METAL_ID})`}>
      <MetalDefs />
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill={`url(#${METAL_ID})`}>
      <MetalDefs />
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

// ─── Botón social con spin 3D ────────────────────────────────────────────────
function SocialButton({ label, href, Icon, delay }) {
  const [paused, setPaused] = useState(false)

  return (
    <a
      href={href}
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        display: 'inline-flex',
        width: 44, height: 44,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '500px',
        textDecoration: 'none',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <div style={{
        width: 44, height: 44,
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(168,85,247,0.35)',
        boxShadow: '0 0 12px rgba(168,85,247,0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
        animation: `spin-y 3s linear ${delay}s infinite`,
        animationPlayState: paused ? 'paused' : 'running',
        transition: 'box-shadow 0.2s ease',
        ...(paused && { boxShadow: '0 0 24px rgba(168,85,247,0.6), inset 0 1px 0 rgba(255,255,255,0.2)' }),
      }}>
        <Icon />
      </div>
    </a>
  )
}

// ─── Avatar 3D con frame metálico real ──────────────────────────────────────
function AvatarFrame({ hovered, confettiKey }) {
  const S = 288 // tamaño base

  return (
    <div style={{ position: 'relative', width: S, height: S }}>

      {/* ── Glow de fondo pulsante ── */}
      <div style={{
        position: 'absolute',
        inset: -40,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.35) 0%, rgba(236,72,153,0.15) 40%, transparent 70%)',
        animation: 'glow-pulse 3s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0,
        filter: 'blur(12px)',
        transition: 'opacity 0.4s',
        opacity: hovered ? 1 : 0.7,
      }} />

      {/* ── Anillo externo (más grande, más transparente) ── */}
      <div style={{
        position: 'absolute',
        inset: -24,
        borderRadius: 44,
        border: '1px solid rgba(168,85,247,0.22)',
        background: 'rgba(168,85,247,0.03)',
        boxShadow: 'inset 0 0 30px rgba(168,85,247,0.08)',
        transform: 'perspective(900px) rotateX(6deg) rotateY(-5deg)',
        animation: 'frame-float 6s ease-in-out infinite',
        animationDelay: '-2s',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ── Anillo medio ── */}
      <div style={{
        position: 'absolute',
        inset: -12,
        borderRadius: 36,
        border: '1px solid rgba(168,85,247,0.38)',
        transform: 'perspective(900px) rotateX(-4deg) rotateY(4deg)',
        animation: 'frame-float 5.5s ease-in-out infinite',
        animationDelay: '-1s',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      {/* ── Confetti (detrás del frame principal) ── */}
      <Confetti key={confettiKey} active={hovered} />

      {/* ── Frame principal metálico con animación 3D ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 30,
        padding: '3px',
        background: hovered
          ? 'linear-gradient(130deg, #fff 0%, #f0abfc 15%, #c084fc 30%, #ec4899 50%, #fff 62%, #a855f7 78%, #f9a8d4 92%, #fff 100%)'
          : 'linear-gradient(130deg, rgba(255,255,255,0.8) 0%, #c084fc 25%, #a855f7 50%, rgba(255,255,255,0.6) 65%, #ec4899 82%, rgba(255,255,255,0.7) 100%)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.7), 0 0 120px rgba(236,72,153,0.3), 0 24px 60px rgba(0,0,0,0.5)'
          : '0 0 0 1px rgba(168,85,247,0.2), 0 0 30px rgba(168,85,247,0.35), 0 20px 50px rgba(0,0,0,0.4)',
        animation: 'frame-float 5s ease-in-out infinite',
        transition: 'box-shadow 0.4s ease, background 0.4s ease',
        zIndex: 10,
      }}>

        {/* Highlight superior (reflejo de luz metálica) */}
        <div style={{
          position: 'absolute',
          top: 0, left: '10%', right: '10%', height: '45%',
          borderRadius: '26px 26px 50% 50%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 3,
        }} />

        {/* Shine dot izquierda */}
        <div style={{
          position: 'absolute', top: 7, left: 10,
          width: 7, height: 7, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,1), rgba(255,255,255,0.3))',
          pointerEvents: 'none', zIndex: 4,
        }} />

        {/* Shine dot derecha */}
        <div style={{
          position: 'absolute', top: 7, right: 10,
          width: 4, height: 4, borderRadius: '50%',
          background: 'rgba(255,255,255,0.7)',
          pointerEvents: 'none', zIndex: 4,
        }} />

        {/* ── Contenedor del avatar con overflow visible (para que la mano salga) ── */}
        <div style={{
          borderRadius: 27,
          width: '100%', height: '100%',
          position: 'relative',
          overflow: 'visible',        // no clipa → la mano puede sobresalir
          background: 'linear-gradient(160deg, rgba(168,85,247,0.2), rgba(236,72,153,0.12))',
          zIndex: 1,
        }}>
          {/* Fondo con bordes redondeados (se clipa solo el fondo) */}
          <div style={{
            position: 'absolute', inset: 0,
            borderRadius: 27,
            background: 'linear-gradient(160deg, rgba(168,85,247,0.18), rgba(236,72,153,0.1))',
          }} />

          {/* Avatar normal — clipeado al cuadro */}
          <img
            src="/avatar.png"
            alt="Dylan Fuks"
            style={{
              position: 'absolute', bottom: 0, left: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              borderRadius: 27,
              clipPath: 'inset(0 0 0 0 round 27px)',
              opacity: hovered ? 0 : 1,
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'opacity 0.45s ease, transform 0.45s ease',
            }}
            onError={(e) => { e.target.style.display = 'none' }}
          />

          {/* Avatar saludando — mano sobresale por arriba */}
          <img
            src="/avatar-wave.png"
            alt="Dylan saludando"
            style={{
              position: 'absolute',
              bottom: 0, left: '50%',
              transform: hovered
                ? 'translateX(-50%) scale(1)'
                : 'translateX(-50%) scale(0.97)',
              width: '100%',
              height: '118%',             // más alto → el brazo sale arriba
              objectFit: 'cover',
              objectPosition: 'bottom',   // ancla desde abajo, overflow arriba
              // clip: deja salir la parte de arriba (el brazo)
              clipPath: hovered
                ? 'inset(-22% -5% 0 -5% round 27px)'  // negativo arriba = overflow
                : 'inset(0 0 0 0 round 27px)',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.45s ease, transform 0.45s ease, clip-path 0.5s ease',
            }}
            onError={(e) => { e.target.style.display = 'none' }}
          />

          {/* Fallback DF */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: -1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 56, fontWeight: 800, fontFamily: 'Poppins, sans-serif',
            background: 'linear-gradient(135deg, #A855F7, #EC4899)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>DF</div>
        </div>
      </div>
    </div>
  )
}

// ─── Hero principal ──────────────────────────────────────────────────────────
const socials = [
  { label: 'Behance',  Icon: IconBehance,  href: '#', delay: 0    },
  { label: 'LinkedIn', Icon: IconLinkedIn, href: '#', delay: -1   },
  { label: 'GitHub',   Icon: IconGitHub,   href: '#', delay: -1.8 },
]

export default function Hero() {
  const [hovered,     setHovered]     = useState(false)
  const [confettiKey, setConfettiKey] = useState(0)
  const timerRef = useRef(null)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current)
    setHovered(true)
    setConfettiKey((k) => k + 1)
  }
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setHovered(false), 120)
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div className="orb w-96 h-96 -top-20 -left-20"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.55), transparent)' }} />
      <div className="orb w-80 h-80 top-1/3 right-0"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.4), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">

        {/* ── Texto ── */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {hero.greeting}{' '}
              <span style={{
                fontFamily: 'Agbalumo, cursive', fontSize: '1.3rem',
                background: 'linear-gradient(135deg, #A855F7, #EC4899)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {hero.name}
              </span>
            </p>
            <h1 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800,
              fontSize: 'clamp(40px, 5.5vw, 64px)', letterSpacing: '0.01em', lineHeight: 1.1,
            }}>
              Diseñador{' '}
              <span style={{
                background: 'linear-gradient(135deg, #A855F7, #EC4899)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                UX&UI
              </span>
            </h1>
          </div>

          <p className="text-base leading-relaxed max-w-md"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
            {hero.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => scrollTo('proyectos')} className="btn-primary">{hero.cta1}</button>
            <button onClick={() => scrollTo('contacto')}  className="btn-outline">{hero.cta2}</button>
          </div>

          {/* Social con spin 3D */}
          <div className="flex gap-3 mt-1">
            {socials.map((s) => (
              <SocialButton key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* ── Avatar ── */}
        <div className="flex justify-center md:justify-end"
          style={{ paddingTop: 40 }} // espacio para que el brazo no se corte
        >
          <div
            className="cursor-pointer select-none"
            style={{ paddingTop: 40, marginTop: -40 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AvatarFrame hovered={hovered} confettiKey={confettiKey} />
          </div>
        </div>
      </div>

      {/* Scroll indicator — dos flechas */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center hover:opacity-100 transition-opacity"
        style={{ opacity: 0.6 }}
      >
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" className="animate-bounce" style={{ animationDelay: '0s' }}>
          <path d="M4 4L14 14L24 4" stroke="url(#arrowGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="arrowGrad1" x1="4" y1="4" x2="24" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7"/>
              <stop offset="1" stopColor="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" className="animate-bounce -mt-2" style={{ opacity: 0.4, animationDelay: '0.15s' }}>
          <path d="M4 4L14 14L24 4" stroke="url(#arrowGrad2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="arrowGrad2" x1="4" y1="4" x2="24" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7"/>
              <stop offset="1" stopColor="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      </button>
    </section>
  )
}
