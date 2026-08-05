import { Outlet } from 'react-router-dom'
import { TEXTOS, ID_CONTENIDO } from '@/config/siteConfig'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

/**
 * Estructura común de todas las páginas: enlace de salto, cabecera, contenido
 * y pie.
 *
 * El enlace de salto es el primer elemento enfocable de la página: permite a
 * quien navega por teclado ir directo al contenido sin recorrer todo el menú.
 * Está oculto hasta que recibe el foco.
 */
function Layout() {
  return (
    <>
      <a href={`#${ID_CONTENIDO}`} className="salto-contenido">
        {TEXTOS.saltarAlContenido}
      </a>

      <Header />

      <main id={ID_CONTENIDO}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout
