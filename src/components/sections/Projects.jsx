import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../data/content'

const FILTERS = [
  { id: 'all',    label: 'Todos' },
  { id: 'uxui',  label: 'UX · UI' },
  { id: 'web',   label: 'Web' },
  { id: 'motion',label: 'Motion' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.type === active)

  return (
    <section id="proyectos" className="relative py-20">
      <div className="orb w-80 h-80 -left-20 bottom-0 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.6), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-heading section-title mb-3">
            Mis Proyectos
          </h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Proyectos que muestran mi proceso de diseño y solución de problemas
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {FILTERS.map((f) => {
            const isActive = active === f.id
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className="relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                  border: isActive
                    ? '1px solid transparent'
                    : '1px solid rgba(168,85,247,0.25)',
                  background: isActive
                    ? 'linear-gradient(135deg, #A855F7, #EC4899)'
                    : 'rgba(255,255,255,0.03)',
                  boxShadow: isActive ? '0 0 20px rgba(168,85,247,0.4)' : 'none',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Grid con AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1,    y: 0  }}
                exit={{    opacity: 0, scale: 0.92, y: 16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Link
                  to={`/proyecto/${project.id}`}
                  className="card group relative overflow-hidden flex flex-col h-full"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  {/* Imagen portada */}
                  <div className="w-full h-48 rounded-xl mb-5 overflow-hidden flex-shrink-0"
                    style={{ border: `1px solid ${project.color}33` }}>
                    {project.research?.images?.cover ? (
                      <img
                        src={project.research.images.cover}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }}>
                        <span className="text-3xl font-bold font-heading opacity-30" style={{ color: project.color }}>
                          {project.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Contenido */}
                  <div className="px-4 pb-5 flex flex-col flex-1">
                    {/* Categoría */}
                    <span className="inline-flex self-start text-xs font-medium px-3 py-1 rounded-full mb-3"
                      style={{
                        background: `${project.color}18`,
                        color: project.color,
                        border: `1px solid ${project.color}33`,
                      }}
                    >
                      {project.category}
                    </span>

                    <h3 className="font-heading font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-xs leading-5 mb-5 flex-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            color: 'rgba(255,255,255,0.45)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold self-start transition-all duration-300 group-hover:gap-3 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}22, ${project.color}10)`,
                        border: `1px solid ${project.color}55`,
                        color: project.color,
                      }}
                    >
                      Ver proyecto
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>

                  {/* Glow en hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ boxShadow: `inset 0 0 40px ${project.color}10` }}
                  />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
