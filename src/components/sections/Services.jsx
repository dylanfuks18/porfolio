import { services } from '../../data/content'
import { IconUIUX, IconSocialMedia, IconWireframe, IconMotion } from '../ServiceIcons'

const icons = [<IconUIUX />, <IconSocialMedia />, <IconWireframe />, <IconMotion />]

export default function Services() {
  return (
    <section id="servicios" className="relative py-28">
      <div className="orb w-96 h-64 left-1/2 -translate-x-1/2 top-0 opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.5), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center section-title mb-16"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0em' }}>
          Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div key={i}
              className="card p-6 flex flex-col gap-5 group"
              style={{ transition: 'all 0.3s ease' }}>

              {/* Ícono SVG con efecto 3D en hover */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                style={{
                  background: 'rgba(168,85,247,0.1)',
                  border: '1px solid rgba(168,85,247,0.2)',
                  filter: 'drop-shadow(0 0 0px rgba(168,85,247,0))',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                  {icons[i]}
                </div>
              </div>

              <h3 className="font-bold text-base leading-snug"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, letterSpacing: '0.002em' }}>
                {service.title}
              </h3>

              <p className="text-sm leading-6" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
