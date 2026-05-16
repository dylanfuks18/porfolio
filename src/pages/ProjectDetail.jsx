import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/content'
import Navbar from '../components/Navbar'
import Lightbox from '../components/Lightbox'

function ResearchImage({ src, label, sublabel, color, tall }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${tall ? 'md:row-span-2' : ''}`}
      style={{ border: `1px solid ${color}20` }}>
      <img
        src={src}
        alt={label}
        className="w-full h-full object-cover"
        style={{ minHeight: tall ? 320 : 150, maxHeight: tall ? 500 : 220 }}
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      {/* Fallback */}
      <div className="hidden absolute inset-0 flex-col items-center justify-center gap-2"
        style={{ background: `${color}08` }}>
        <p className="text-sm font-semibold" style={{ color }}>{label}</p>
        {sublabel && <p className="text-xs text-center px-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{sublabel}</p>}
      </div>
      {/* Overlay con label */}
      <div className="absolute bottom-0 inset-x-0 px-4 py-3"
        style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.7), transparent)' }}>
        <p className="text-xs font-semibold" style={{ color }}>{label}</p>
        {sublabel && <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{sublabel}</p>}
      </div>
    </div>
  )
}

function SectionTitle({ children, color }) {
  return (
    <h2 className="font-heading font-bold text-2xl mb-6" style={{ color }}>
      {children}
    </h2>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [lightbox, setLightbox] = useState(null)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-heading">Proyecto no encontrado</p>
        <Link to="/" className="btn-primary">Volver al inicio</Link>
      </div>
    )
  }

  const others = projects.filter((p) => p.id !== id && p.type === project.type).slice(0, 2)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

      {/* ── Hero ── */}
      <div
        className="relative pt-32 pb-20 px-6"
        style={{
          background: `linear-gradient(180deg, ${project.color}18 0%, transparent 100%)`,
          borderBottom: `1px solid ${project.color}22`,
        }}
      >
        <div className="orb w-96 h-96 left-1/2 -translate-x-1/2 -top-20 opacity-30"
          style={{ background: `radial-gradient(circle, ${project.color}60, transparent)` }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-purple-400"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            ← Volver al portfolio
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}33` }}>
              {project.category}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">{project.title}</h1>
          <p className="text-base leading-7 max-w-2xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {project.fullDescription}
          </p>

          {/* Meta row */}
          {project.badge && (
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={
                  project.badge.includes('Claude')
                    ? { background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.4)', color: '#C084FC' }
                    : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }
                }>
                {project.badge}
              </span>
            </div>
          )}

          {(project.role || project.team || project.duration) && (
            <div className="flex flex-wrap gap-8 mt-6 pt-8 border-t" style={{ borderColor: `${project.color}20` }}>
              {[
                project.role     && { label: 'Mi rol',    value: project.role },
                project.team     && { label: 'Equipo',    value: `${project.team} integrantes` },
                project.duration && { label: 'Duración',  value: project.duration },
              ].filter(Boolean).map((m) => (
                <div key={m.label}>
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{m.label}</p>
                  <p className="text-sm font-semibold" style={{ color: project.color }}>{m.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col gap-16">

        {/* ── Imagen hero ── */}
        <div className="w-full h-72 md:h-96 rounded-3xl overflow-hidden"
          style={{ border: `1px solid ${project.color}25` }}>
          {project.research?.images?.cover ? (
            <img
              src={project.research.images.cover}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${project.color}18, ${project.color}06)` }}>
              <span className="text-6xl font-bold font-heading opacity-15" style={{ color: project.color }}>
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* ── Desafío + Solución ── */}
        <div>
          <SectionTitle color={project.color}>El Proyecto</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-7">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: project.color }}>
                El Desafío
              </p>
              <p className="text-sm leading-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {project.challenge}
              </p>
            </div>
            <div className="card p-7">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: project.color }}>
                La Solución
              </p>
              <p className="text-sm leading-7" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* ── Sección IA destacada ── */}
        {project.research?.aiSection && (
          <div className="rounded-2xl overflow-hidden mb-4"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08))', border: '1px solid rgba(124,58,237,0.3)' }}>
            <div className="p-8 md:p-10">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-5"
                style={{ background: 'rgba(124,58,237,0.25)', color: '#A855F7', border: '1px solid rgba(168,85,247,0.4)', letterSpacing: '0.08em' }}>
                📡 TU RADAR DE INTELIGENCIA ARTIFICIAL
              </span>

              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: '#fff' }}>
                {project.research.aiSection.title}
              </h3>
              <p className="text-sm leading-7 mb-8" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '680px' }}>
                {project.research.aiSection.description}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {project.research.aiSection.features.map((f) => (
                  <div key={f.label} className="rounded-xl p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="text-2xl mb-2">{f.icon}</div>
                    <p className="font-semibold text-sm mb-1" style={{ color: '#fff' }}>{f.label}</p>
                    <p className="text-xs leading-5" style={{ color: 'rgba(255,255,255,0.45)' }}>{f.desc}</p>
                  </div>
                ))}
              </div>

              {/* Imágenes de la sección IA */}
              {project.research.aiSection.images?.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.research.aiSection.images.map((img, i) => (
                    <div key={i}
                      className="rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                      style={{ border: '1px solid rgba(168,85,247,0.2)' }}
                      onClick={() => setLightbox({ src: img, alt: `IA screenshot ${i + 1}` })}>
                      <img src={img} alt={`IA screenshot ${i + 1}`}
                        className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Card funcionalidad normal ── */}
        {project.research?.normalSection && (
          <div className="rounded-2xl overflow-hidden mb-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="p-8 md:p-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-5"
                style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40`, letterSpacing: '0.08em' }}>
                📱 LA APP
              </span>
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-3" style={{ color: '#fff' }}>
                {project.research.normalSection.title}
              </h3>
              <p className="text-sm leading-7 mb-8" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '680px' }}>
                {project.research.normalSection.description}
              </p>
              {project.research.normalSection.images?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.research.normalSection.images.map((img, i) => (
                    <div key={i}
                      className="rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                      style={{ border: `1px solid ${project.color}20` }}
                      onClick={() => setLightbox({ src: img, alt: `App screenshot ${i + 1}` })}>
                      <img src={img} alt={`App screenshot ${i + 1}`}
                        className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Research (solo si existe y tiene stages) ── */}
        {project.research && project.research.stages && (
          <div>
            <SectionTitle color={project.color}>Proceso & Producto</SectionTitle>
            <p className="text-sm leading-7 mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {project.research.overview}
            </p>

            {/* 5 Etapas */}
            {project.research.stages && (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
                {project.research.stages.map((stage) => (
                  <div
                    key={stage.number}
                    className="card p-5 flex flex-col gap-3 relative overflow-hidden"
                    style={{ borderColor: `${project.color}30` }}
                  >
                    {/* Número grande de fondo */}
                    <span
                      className="absolute -top-2 -right-1 text-7xl font-black font-heading select-none pointer-events-none"
                      style={{ color: `${project.color}10` }}
                    >
                      {stage.number}
                    </span>

                    {/* Número pequeño */}
                    <span
                      className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${project.color}25`, color: project.color }}
                    >
                      {stage.number}
                    </span>

                    <div>
                      <p className="font-heading font-bold text-sm mb-0.5">{stage.name}</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stage.description}</p>
                    </div>

                    <ul className="flex flex-col gap-1.5 mt-1">
                      {stage.activities.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: project.color }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Imágenes de research */}
            {project.research.images ? (
              <div className="flex flex-col gap-4">
                {/* Tree Testing — centrada y acotada */}
                {project.research.images.treetesting && (
                  <div className="flex justify-center">
                    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${project.color}20`, maxWidth: 640, width: '100%' }}>
                      <img
                        src={project.research.images.treetesting}
                        alt="Tree Testing"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
                {/* Anti-persona + Sitemap — 2 columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.research.images.antipersona && (
                    <ResearchImage
                      src={project.research.images.antipersona}
                      label="Anti-Persona"
                      sublabel={project.research.antiPersona}
                      color={project.color}
                    />
                  )}
                  {project.research.images.sitemap && (
                    <ResearchImage
                      src={project.research.images.sitemap}
                      label="SiteMap Validado"
                      sublabel={project.research.sitemapSections?.join(' · ')}
                      color={project.color}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full h-52 rounded-2xl flex items-center justify-center"
                style={{ background: `${project.color}06`, border: `1px dashed ${project.color}25` }}>
                <p className="text-sm" style={{ color: `${project.color}50` }}>
                  Tree Testing · Anti-Persona · Sitemap
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── Diseño Final ── */}
        <div>
          <SectionTitle color={project.color}>Diseño Final</SectionTitle>

          {/* Video demo */}
          {project.research?.images?.demo && (
            <div className="flex justify-center mb-10">
              <div className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${project.color}25`, maxWidth: 320, width: '100%' }}>
                <video
                  src={project.research.images.demo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}

          {/* Screens generales */}
          {project.research?.images?.screens?.length > 0 && (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
                {project.research.images.screens.map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    style={{ border: `1px solid ${project.color}20` }}
                    onClick={() => setLightbox({ src, alt: `Screen ${i + 1}` })}>
                    <img src={src} alt={`Pantalla ${i + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wireframes baja fidelidad */}
          {project.research?.images?.lowfi?.length > 0 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: project.color }}>
                Bocetos — Baja Fidelidad
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.research.images.lowfi.map((src, i) => (
                  <div key={i}
                    className="rounded-2xl overflow-hidden cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                    style={{ border: `1px solid ${project.color}20` }}
                    onClick={() => setLightbox({ src, alt: `Boceto ${i + 1}` })}>
                    <img src={src} alt={`Boceto ${i + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wireframes media fidelidad */}
          {project.research?.images?.midfi?.length > 0 && (
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: project.color }}>
                Wireframes — Media Fidelidad
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.research.images.midfi.map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden cursor-zoom-in"
                    style={{ border: `1px solid ${project.color}20` }}
                    onClick={() => setLightbox({ src, alt: `Wireframe ${i + 1}` })}>
                    <img src={src} alt={`Wireframe ${i + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>


        {/* ── Antes vs Después ── */}
        {project.research?.images?.beforeAfter?.length > 0 && (
          <div>
            <SectionTitle color={project.color}>Antes vs Después</SectionTitle>
            <p className="text-sm leading-7 mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Comparativa entre el diseño original de la app y el rediseño propuesto, mostrando las mejoras en usabilidad, jerarquía visual y flujo de navegación.
            </p>
            <div className="flex flex-col gap-10">
              {project.research.images.beforeAfter.map((pair, i) => (
                <div key={i}>
                  {pair.label && (
                    <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                      style={{ color: project.color }}>
                      {pair.label}
                    </p>
                  )}
                  <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-4" style={{ maxWidth: 560, width: '100%' }}>
                      {/* Antes */}
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full self-start"
                          style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' }}>
                          Antes
                        </span>
                        <div
                          className="rounded-xl overflow-hidden cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                          style={{ border: '1px solid rgba(239,68,68,0.2)' }}
                          onClick={() => setLightbox({ src: pair.before, alt: `${pair.label} — Antes` })}
                        >
                          <img src={pair.before} alt={`${pair.label} antes`} className="w-full h-auto" />
                        </div>
                      </div>
                      {/* Después */}
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full self-start"
                          style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}>
                          Después
                        </span>
                        <div
                          className="rounded-xl overflow-hidden cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                          style={{ border: `1px solid ${project.color}30` }}
                          onClick={() => setLightbox({ src: pair.after, alt: `${pair.label} — Después` })}
                        >
                          <img src={pair.after} alt={`${pair.label} después`} className="w-full h-auto" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mejoras — placeholder hasta tener el texto del PDF */}
                  {pair.improvements?.length > 0 && (
                    <ul className="flex flex-col gap-2 mt-4 max-w-lg mx-auto">
                      {pair.improvements.map((imp, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: project.color }} />
                          {imp}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA Research en Figma ── */}
        {project.researchUrl && (
          <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div>
              <p className="font-heading font-bold text-lg mb-1">Documentación del research</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Toda la información recolectada para este rediseño — user personas, benchmarking, flujos y decisiones de diseño.
              </p>
            </div>
            <a href={project.researchUrl} target="_blank" rel="noopener noreferrer"
              className="whitespace-nowrap flex-shrink-0 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.8)',
              }}>
              Ver en Figma →
            </a>
          </div>
        )}

        {/* ── CTA Behance o Figma ── */}
        {(project.behanceUrl || project.figmaUrl) && (
          <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ borderColor: `${project.color}30` }}>
            <div>
              <p className="font-heading font-bold text-lg mb-1">
                {project.behanceUrl ? '¿Querés ver el case study completo?' : '¿Querés explorar el prototipo?'}
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {project.behanceUrl
                  ? 'Explorá el proceso completo — research, wireframes y pantallas finales en Behance.'
                  : 'Navegá el prototipo interactivo con todos los flujos diseñados en Figma.'}
              </p>
            </div>
            <a href={project.behanceUrl || project.figmaUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap flex-shrink-0">
              {project.behanceUrl ? 'Ver en Behance →' : 'Ver en Figma →'}
            </a>
          </div>
        )}

        {/* ── CTA Live Site + GitHub (proyectos web) ── */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ borderColor: `${project.color}30` }}>
            <div>
              <p className="font-heading font-bold text-lg mb-1">Explorar el proyecto en vivo</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Visitá la app funcionando o revisá el código fuente completo en GitHub.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-primary whitespace-nowrap">
                  Ver sitio →
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="whitespace-nowrap px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.8)',
                  }}>
                  Ver en GitHub
                </a>
              )}
            </div>
          </div>
        )}

        {/* ── Navegación ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t"
          style={{ borderColor: 'rgba(168,85,247,0.1)' }}>
          <Link to="/" className="btn-outline text-sm">← Volver al portfolio</Link>
          {others.length > 0 && (
            <div className="flex gap-4">
              {others.map((p) => (
                <Link key={p.id} to={`/proyecto/${p.id}`}
                  className="text-sm font-medium transition-colors hover:text-purple-400"
                  style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {p.title} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
