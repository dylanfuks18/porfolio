import { useState } from 'react'
import { contact } from '../../data/content'

const FORMSPREE_ID = 'xlgzqpjp'

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(168,85,247,0.25)',
    borderRadius: '12px',
    color: 'white',
    padding: '12px 16px',
    width: '100%',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contacto" className="relative py-28">
      <div className="orb w-80 h-80 left-1/2 -translate-x-1/2 top-0 opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.5), transparent)' }} />

      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center leading-tight mb-4">
          {contact.heading}
        </h2>
        <p className="text-center mb-12 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
          ✉️ {contact.email}
        </p>

        {status === 'sent' ? (
          <div className="card p-12 flex flex-col items-center gap-4 text-center">
            <span className="text-5xl">🎉</span>
            <p className="font-heading font-bold text-xl">¡Mensaje enviado!</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Te respondo a la brevedad. ¡Gracias por escribir!
            </p>
            <button onClick={() => setStatus('idle')} className="btn-outline mt-2 text-sm">
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(168,85,247,0.6)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(168,85,247,0.25)'}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(168,85,247,0.6)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(168,85,247,0.25)'}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Mensaje</label>
              <textarea
                rows={5}
                placeholder={contact.placeholder}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(168,85,247,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(168,85,247,0.25)'}
              />
            </div>

            {status === 'error' && (
              <p className="text-xs text-red-400">Hubo un error al enviar. Intentá de nuevo o escribime directamente a {contact.email}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary self-end px-10"
              style={{ opacity: status === 'sending' ? 0.6 : 1 }}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 text-center border-t" style={{ borderColor: 'rgba(168,85,247,0.1)' }}>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © 2025 Dylan Fuks · Diseñado y desarrollado con 💜
        </p>
      </div>
    </section>
  )
}
