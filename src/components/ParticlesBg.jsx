import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBg() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 140,
            density: { enable: true, area: 900 },
          },
          color: {
            value: ['#ffffff', '#C084FC', '#F472B6', '#A855F7'],
          },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.08, max: 0.55 },
            animation: {
              enable: true,
              speed: 0.6,
              sync: false,
            },
          },
          size: {
            value: { min: 0.5, max: 1.8 },
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
          },
          modes: {
            grab: {
              distance: 100,
              links: { opacity: 0.12 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
