import { useEffect } from 'react'
import { SITIO } from '@/config/siteConfig'

/**
 * Pone el título y la descripción de la página actual.
 *
 * En una SPA el <title> no cambia solo al navegar entre rutas, y eso afecta al
 * SEO y a los lectores de pantalla, que lo anuncian al cambiar de página.
 */
export function useMetaPagina(titulo, descripcion) {
  useEffect(() => {
    const tituloCompleto = titulo ? `${titulo} | ${SITIO.nombre}` : SITIO.titulo
    document.title = tituloCompleto

    if (!descripcion) return

    const meta = document.querySelector('meta[name="description"]')
    const anterior = meta?.getAttribute('content')
    meta?.setAttribute('content', descripcion)

    return () => {
      if (meta && anterior) meta.setAttribute('content', anterior)
    }
  }, [titulo, descripcion])
}
