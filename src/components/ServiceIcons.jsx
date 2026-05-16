/* 4 SVG icons con estética 3D consistente — gradientes purple/pink */

export function IconUIUX() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="uiux-a" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C084FC"/>
          <stop offset="100%" stopColor="#EC4899"/>
        </linearGradient>
        <linearGradient id="uiux-b" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="100%" stopColor="#9333EA"/>
        </linearGradient>
        <filter id="uiux-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#A855F7" floodOpacity="0.5"/>
        </filter>
      </defs>
      {/* Pantalla trasera (sombra 3D) */}
      <rect x="10" y="14" width="30" height="22" rx="4" fill="url(#uiux-b)" opacity="0.5" transform="translate(3,3)"/>
      {/* Pantalla principal */}
      <rect x="10" y="14" width="30" height="22" rx="4" fill="url(#uiux-a)" filter="url(#uiux-shadow)"/>
      {/* Detalle interior */}
      <rect x="14" y="18" width="10" height="7" rx="2" fill="white" opacity="0.25"/>
      <rect x="26" y="18" width="10" height="3" rx="1.5" fill="white" opacity="0.3"/>
      <rect x="26" y="23" width="7" height="2" rx="1" fill="white" opacity="0.2"/>
      {/* Pie de monitor */}
      <rect x="21" y="36" width="6" height="4" rx="1" fill="url(#uiux-a)" opacity="0.7"/>
      <rect x="17" y="39" width="14" height="2" rx="1" fill="url(#uiux-a)" opacity="0.5"/>
      {/* Highlight */}
      <rect x="10" y="14" width="30" height="4" rx="4" fill="white" opacity="0.12"/>
    </svg>
  )
}

export function IconSocialMedia() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sm-a" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C084FC"/>
          <stop offset="100%" stopColor="#EC4899"/>
        </linearGradient>
        <linearGradient id="sm-b" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="100%" stopColor="#9333EA"/>
        </linearGradient>
        <filter id="sm-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#EC4899" floodOpacity="0.5"/>
        </filter>
      </defs>
      {/* Sombra 3D megáfono */}
      <path d="M10 22 L28 14 L28 34 L10 26 Z" fill="url(#sm-b)" opacity="0.4" transform="translate(3,3)"/>
      {/* Megáfono principal */}
      <path d="M10 22 L28 14 L28 34 L10 26 Z" fill="url(#sm-a)" filter="url(#sm-shadow)"/>
      {/* Cuerpo del megáfono */}
      <rect x="6" y="20" width="6" height="8" rx="2" fill="url(#sm-a)" opacity="0.9"/>
      {/* Onda de sonido */}
      <path d="M31 18 Q36 24 31 30" stroke="url(#sm-a)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9"/>
      <path d="M34 15 Q41 24 34 33" stroke="url(#sm-a)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
      {/* Highlight */}
      <path d="M10 22 L28 14 L28 18 L10 24 Z" fill="white" opacity="0.15"/>
    </svg>
  )
}

export function IconWireframe() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wf-a" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C084FC"/>
          <stop offset="100%" stopColor="#EC4899"/>
        </linearGradient>
        <linearGradient id="wf-b" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="100%" stopColor="#9333EA"/>
        </linearGradient>
        <filter id="wf-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#A855F7" floodOpacity="0.5"/>
        </filter>
      </defs>
      {/* Base 3D cara inferior */}
      <path d="M8 32 L24 40 L40 32 L24 24 Z" fill="url(#wf-b)" opacity="0.5"/>
      {/* Cara lateral derecha */}
      <path d="M40 32 L40 18 L24 26 L24 40 Z" fill="url(#wf-b)" opacity="0.7"/>
      {/* Cara frontal */}
      <path d="M8 18 L24 26 L40 18 L24 10 Z" fill="url(#wf-a)" filter="url(#wf-shadow)"/>
      {/* Cara lateral izquierda */}
      <path d="M8 32 L8 18 L24 26 L24 40 Z" fill="url(#wf-a)" opacity="0.75"/>
      {/* Bordes 3D */}
      <line x1="24" y1="10" x2="24" y2="26" stroke="white" strokeWidth="1" opacity="0.2"/>
      <line x1="8"  y1="18" x2="8"  y2="32" stroke="white" strokeWidth="1" opacity="0.2"/>
      <line x1="40" y1="18" x2="40" y2="32" stroke="white" strokeWidth="1" opacity="0.2"/>
      {/* Highlight cara superior */}
      <path d="M8 18 L24 26 L40 18 L24 10 Z" fill="white" opacity="0.1"/>
      <path d="M16 14 L24 18 L32 14 L24 10 Z" fill="white" opacity="0.15"/>
    </svg>
  )
}

export function IconMotion() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mo-a" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C084FC"/>
          <stop offset="100%" stopColor="#EC4899"/>
        </linearGradient>
        <linearGradient id="mo-b" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="100%" stopColor="#9333EA"/>
        </linearGradient>
        <filter id="mo-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#EC4899" floodOpacity="0.5"/>
        </filter>
      </defs>
      {/* Sombra 3D círculo */}
      <circle cx="24" cy="24" r="15" fill="url(#mo-b)" opacity="0.4" transform="translate(3,3)"/>
      {/* Círculo principal */}
      <circle cx="24" cy="24" r="15" fill="url(#mo-a)" filter="url(#mo-shadow)"/>
      {/* Play button */}
      <path d="M20 18 L32 24 L20 30 Z" fill="white" opacity="0.95"/>
      {/* Motion trails */}
      <line x1="6"  y1="20" x2="12" y2="20" stroke="url(#mo-a)" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="4"  y1="24" x2="11" y2="24" stroke="url(#mo-a)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="6"  y1="28" x2="12" y2="28" stroke="url(#mo-a)" strokeWidth="2.5" strokeLinecap="round" opacity="0.3"/>
      {/* Highlight */}
      <ellipse cx="19" cy="18" rx="6" ry="3" fill="white" opacity="0.15" transform="rotate(-30 19 18)"/>
    </svg>
  )
}
