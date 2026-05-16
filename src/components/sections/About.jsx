import { useState, useEffect, useCallback } from 'react'
import { about } from '../../data/content'

const TAG_LAYOUT = [
  { label: 'UADE — Diseño Multimedia', top: '2%',   left: '-18%',  rotate: -9  },
  { label: 'Apasionado del fútbol',    top: '8%',   right: '-22%', rotate: 7   },
  { label: 'Toco el piano',            top: '38%',  left: '-24%',  rotate: 12  },
  { label: 'Alvin 🐶',                 top: '55%',  right: '-20%', rotate: -8  },
  { label: 'Diseño & Creatividad',     bottom: '10%', left: '-16%', rotate: 6  },
  { label: 'Emprendedor',              bottom: '4%',  right: '-18%', rotate: -11 },
]

export default function About() {
  const hasCarousel = about.carouselImages?.length > 0
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % (hasCarousel ? about.carouselImages.length : 1))
  }, [hasCarousel])

  const prev = () => {
    setCurrent((c) => (c - 1 + (hasCarousel ? about.carouselImages.length : 1)) % (hasCarousel ? about.carouselImages.length : 1))
  }

  useEffect(() => {
    if (!hasCarousel || about.carouselImages.length < 2) return
    const t = setInterval(next, 10000)
    return () => clearInterval(t)
  }, [hasCarousel, next])

  const currentSlide = hasCarousel ? about.carouselImages[current] : null
  const activeGlowTag = currentSlide?.glowTag ?? null
  const activeTag = about.personalTags?.find(t => t.label === activeGlowTag)
  const strokeColor = activeTag ? activeTag.color : 'rgba(168,85,247,0.4)'

  return (
    <section id="about" className="relative py-28">
      <div className="orb w-72 h-72 right-0 top-0 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.6), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-heading text-center section-title mb-16">
          {about.title}
        </h2>

        {/* Grid: solo párrafos a la izquierda, carrusel a la derecha — sin skills para alinear centro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16" style={{ alignItems: 'center' }}>

          {/* ── Párrafos ── */}
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {p}
              </p>
            ))}
          </div>

          {/* ── Carrusel + Tags ── */}
          <div className="flex justify-center">
            <div className="relative" style={{ width: 300, height: 300, margin: '50px 90px' }}>

              {/* Tags flotantes */}
              {about.personalTags?.map((tag) => {
                const layout = TAG_LAYOUT.find((l) => l.label === tag.label)
                if (!layout) return null
                const { rotate, ...pos } = layout
                const glowing = activeGlowTag === tag.label
                return (
                  <span
                    key={tag.label}
                    className="absolute inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap pointer-events-none select-none"
                    style={{
                      ...pos,
                      transform: `rotate(${rotate}deg) scale(${glowing ? 1.2 : 1})`,
                      transformOrigin: 'center center',
                      background: glowing ? tag.color + '28' : tag.bg,
                      border: `1px solid ${glowing ? tag.color : tag.border}`,
                      color: '#fff',
                      textShadow: glowing ? `0 0 8px ${tag.color}` : 'none',
                      boxShadow: glowing
                        ? `0 0 28px ${tag.color}90, 0 0 12px ${tag.color}70`
                        : 'none',
                      backdropFilter: 'blur(8px)',
                      zIndex: glowing ? 20 : 10,
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    {tag.icon} {tag.label}
                  </span>
                )
              })}

              {/* Wrapper exterior con borde + glow (sin overflow hidden) */}
              <div
                className="w-full h-full rounded-3xl"
                style={{
                  border: `2px solid ${strokeColor}`,
                  boxShadow: `0 0 30px ${strokeColor}80, 0 0 10px ${strokeColor}50`,
                  transition: 'border-color 0.7s ease, box-shadow 0.7s ease',
                  padding: 0,
                  position: 'relative',
                }}
              >
                {/* Inner con overflow hidden para recortar la imagen */}
                <div className="w-full h-full rounded-3xl overflow-hidden" style={{ position: 'absolute', inset: 0 }}>
                  {hasCarousel ? (
                    <>
                      {about.carouselImages.map((slide, i) => (
                        <img
                          key={i}
                          src={slide.src}
                          alt={`Foto ${i + 1}`}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                          style={{ opacity: i === current ? 1 : 0, objectPosition: slide.objectPosition || 'center center' }}
                        />
                      ))}

                      {about.carouselImages.length > 1 && (
                        <>
                          <button
                            onClick={prev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center z-20 transition-all duration-200 hover:scale-110"
                            style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: 13 }}
                          >‹</button>
                          <button
                            onClick={next}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center z-20 transition-all duration-200 hover:scale-110"
                            style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: 13 }}
                          >›</button>

                          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
                            {about.carouselImages.map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className="rounded-full transition-all duration-300"
                                style={{
                                  width: i === current ? 18 : 5,
                                  height: 5,
                                  background: i === current ? strokeColor : 'rgba(255,255,255,0.3)',
                                }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <img
                      src="/avatar.png"
                      alt="Dylan Fuks"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Skills debajo del grid ── */}
        <div className="mt-12">
          <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Skills:
          </p>
          <div className="flex flex-wrap gap-2">
            {about.skills.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: 'rgba(168,85,247,0.1)',
                  border: '1px solid rgba(168,85,247,0.3)',
                  color: '#C084FC',
                }}
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
