import { Link } from 'react-router-dom'
import './Boton.css'

/**
 * Botón único del sitio. Decide solo si debe pintarse como <button>, como <a>
 * o como <Link> de React Router, según lo que reciba:
 *
 *   onClick -> <button>          acción dentro de la página
 *   para    -> <Link>            navegación interna
 *   href    -> <a>               enlace externo o ancla
 *
 * Esto importa para accesibilidad: lo que navega debe ser un enlace y lo que
 * ejecuta una acción debe ser un botón. Un <div onClick> no se alcanza con Tab.
 */
function Boton({
  children,
  variante = 'primario',
  tamano = 'md',
  para,
  href,
  onClick,
  tipo = 'button',
  icono = null,
  externo = false,
  className = '',
  ...resto
}) {
  const clases = ['boton', `boton--${variante}`, `boton--${tamano}`, className]
    .filter(Boolean)
    .join(' ')

  const contenido = (
    <>
      {icono ? (
        <span className="boton__icono" aria-hidden="true">
          {icono}
        </span>
      ) : null}
      {children}
    </>
  )

  if (para) {
    return (
      <Link to={para} className={clases} {...resto}>
        {contenido}
      </Link>
    )
  }

  if (href) {
    // rel obligatorio al abrir en otra pestaña: sin él la página destino puede
    // manipular la nuestra a través de window.opener.
    const atributosExternos = externo ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={clases} {...atributosExternos} {...resto}>
        {contenido}
      </a>
    )
  }

  return (
    <button type={tipo} className={clases} onClick={onClick} {...resto}>
      {contenido}
    </button>
  )
}

export default Boton
