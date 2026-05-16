import { useEffect } from 'react'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
      style={{ background: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold transition-colors"
        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
      >
        ✕
      </button>

      {/* Imagen */}
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full rounded-2xl object-contain"
        style={{ boxShadow: '0 0 80px rgba(0,0,0,0.8)' }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
