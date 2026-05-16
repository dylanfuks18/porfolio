import { testimonials } from '../../data/content'

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-28">
      <div className="orb w-96 h-64 right-0 top-1/2 -translate-y-1/2 opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.5), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-heading text-center section-title mb-16">
          Testimonios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6 flex flex-col gap-5">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-sm" style={{ color: '#A855F7' }}>★</span>
                ))}
              </div>

              {/* Texto */}
              <p className="text-sm leading-6 flex-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                "{t.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'rgba(168,85,247,0.15)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
