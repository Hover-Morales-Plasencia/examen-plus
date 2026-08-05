import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITIO, NAVEGACION, ENLACES_EXTERNOS, TEXTOS } from '@/config/siteConfig'
import logo from '@/assets/images/logo-horizontal.webp'
import Boton from './Boton'
import './Header.css'

/**
 * Cabecera fija con el logo, la navegación y el acceso a la plataforma.
 * Sustituye al mega-menú de Elementor, que traía "Item #1/2/3" de relleno.
 */
function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const botonMenuRef = useRef(null)
  const { pathname } = useLocation()

  // El menú móvil debe cerrarse con Escape y devolver el foco al botón que lo
  // abrió: si no, quien navega por teclado queda perdido al cerrarlo.
  useEffect(() => {
    if (!menuAbierto) return

    function alPulsarTecla(evento) {
      if (evento.key === 'Escape') {
        setMenuAbierto(false)
        botonMenuRef.current?.focus()
      }
    }

    document.addEventListener('keydown', alPulsarTecla)
    return () => document.removeEventListener('keydown', alPulsarTecla)
  }, [menuAbierto])

  return (
    <header className="header">
      <div className="header__contenedor">
        <Link to="/" className="header__logo" aria-label={`${SITIO.nombre}, ir al inicio`}>
          <img src={logo} alt={SITIO.nombre} width={200} height={84} />
        </Link>

        <button
          ref={botonMenuRef}
          type="button"
          className="header__hamburguesa"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
        >
          <span className="header__hamburguesa-texto">
            {menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          </span>
          <span className="header__hamburguesa-icono" aria-hidden="true">
            {menuAbierto ? '✕' : '☰'}
          </span>
        </button>

        <nav
          id="menu-principal"
          className={`header__nav ${menuAbierto ? 'header__nav--abierto' : ''}`}
          aria-label="Navegación principal"
        >
          <ul className="header__lista">
            {NAVEGACION.map((enlace) => (
              <li key={enlace.href}>
                <a
                  href={enlace.href}
                  className="header__enlace"
                  onClick={() => setMenuAbierto(false)}
                  /* Marca "Inicio" cuando estamos en la home. Los demás enlaces
                     son anclas dentro de esa misma página, así que no procede. */
                  aria-current={enlace.href === '/' && pathname === '/' ? 'page' : undefined}
                >
                  {enlace.etiqueta}
                </a>
              </li>
            ))}
          </ul>

          <Boton
            href={ENLACES_EXTERNOS.plataformaAlumnos}
            externo
            variante="primario"
            tamano="sm"
            className="header__sesion"
          >
            {TEXTOS.ctaIniciarSesion}
          </Boton>
        </nav>
      </div>
    </header>
  )
}

export default Header
