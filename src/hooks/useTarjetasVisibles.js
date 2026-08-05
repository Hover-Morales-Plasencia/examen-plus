import { useEffect, useState } from 'react'

/**
 * Cuántas tarjetas caben según el ancho de pantalla.
 *
 * Los puntos de quiebre coinciden con BREAKPOINTS de siteConfig.js.
 * Se usa matchMedia y no un listener de resize porque solo avisa cuando
 * realmente se cruza el umbral, no en cada píxel.
 */
export function useTarjetasVisibles({ movil = 1, tablet = 2, escritorio = 3 } = {}) {
  const [visibles, setVisibles] = useState(escritorio)

  useEffect(() => {
    const consultaTablet = window.matchMedia('(min-width: 768px)')
    const consultaEscritorio = window.matchMedia('(min-width: 1024px)')

    const actualizar = () => {
      if (consultaEscritorio.matches) setVisibles(escritorio)
      else if (consultaTablet.matches) setVisibles(tablet)
      else setVisibles(movil)
    }

    actualizar()
    consultaTablet.addEventListener('change', actualizar)
    consultaEscritorio.addEventListener('change', actualizar)

    return () => {
      consultaTablet.removeEventListener('change', actualizar)
      consultaEscritorio.removeEventListener('change', actualizar)
    }
  }, [movil, tablet, escritorio])

  return visibles
}
