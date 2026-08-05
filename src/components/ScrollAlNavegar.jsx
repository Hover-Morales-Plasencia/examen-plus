import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Al cambiar de página lleva el scroll arriba; si la URL trae un ancla, salta a
 * ella. Sin esto, entrar a una página de detalle desde media home te deja a
 * mitad del contenido nuevo.
 *
 * No pinta nada: solo reacciona a los cambios de ruta.
 */
function ScrollAlNavegar() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const destino = document.querySelector(hash)
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollAlNavegar
