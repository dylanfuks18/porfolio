import { useEffect, useState } from 'react'

const COLORS = ['#A855F7', '#EC4899', '#F472B6', '#C084FC', '#FBBF24', '#34D399', '#60A5FA', '#ffffff', '#e879f9']
const SHAPES = ['rounded-sm', 'rounded-full', '']

function rand(a, b) { return a + Math.random() * (b - a) }

export default function Confetti({ active }) {
  const [particles, setParticles] = useState([])
  const [visible, setVisible]     = useState(false)

  useEffect(() => {
    if (!active) return

    const generated = Array.from({ length: 52 }, (_, i) => {
      // Ángulo completamente aleatorio → burst radial en todas las direcciones
      const angle    = Math.random() * Math.PI * 2
      const distance = rand(80, 180)
      return {
        id:       i,
        color:    COLORS[Math.floor(Math.random() * COLORS.length)],
        shape:    SHAPES[Math.floor(Math.random() * SHAPES.length)],
        // Posición de origen: cerca del centro del avatar
        left:     rand(35, 65),
        top:      rand(35, 65),
        cx:       `${Math.cos(angle) * distance}px`,
        cy:       `${Math.sin(angle) * distance}px`,
        size:     rand(5, 11),
        duration: rand(600, 1100),
        delay:    rand(0, 180),
      }
    })

    setParticles(generated)
    setVisible(true)

    const dissolve = setTimeout(() => setVisible(false), 950)
    const clear    = setTimeout(() => setParticles([]), 1500)
    return () => { clearTimeout(dissolve); clearTimeout(clear) }
  }, [active])

  if (!particles.length) return null

  return (
    // z-index 5: detrás del avatar (z-index 10) pero delante de los marcos (z-index 1-2)
    <div
      className="absolute pointer-events-none"
      style={{ inset: 0, zIndex: 5, overflow: 'visible' }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute ${p.shape}`}
          style={{
            left:       `${p.left}%`,
            top:        `${p.top}%`,
            width:      p.size,
            height:     p.size,
            background: p.color,
            opacity:    visible ? 1 : 0,
            transition: 'opacity 0.45s ease',
            '--cx':     p.cx,
            '--cy':     p.cy,
            animation:  `confetti-burst ${p.duration}ms ${p.delay}ms ease-out forwards`,
          }}
        />
      ))}
    </div>
  )
}
