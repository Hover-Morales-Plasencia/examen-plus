import './DetalleHero.css'

/**
 * Cabecera de las páginas de detalle (universidad, grado, idioma).
 *
 * Aquí vive el único <h1> de esas páginas. El texto va sobre una imagen, así
 * que lleva un velo oscuro que garantiza el contraste (20:1 con blanco).
 */
function DetalleHero({ titulo, subtitulo, imagen, escudo = null, altEscudo = '' }) {
  return (
    <header className="detalle-hero">
      <img className="detalle-hero__fondo" src={imagen} alt="" width={1600} height={900} />
      <div className="detalle-hero__velo" />

      <div className="detalle-hero__contenido">
        {escudo ? (
          <img
            className="detalle-hero__escudo"
            src={escudo}
            alt={altEscudo}
            width={96}
            height={96}
          />
        ) : null}
        <div>
          <h1 className="detalle-hero__titulo">{titulo}</h1>
          {subtitulo ? <p className="detalle-hero__subtitulo">{subtitulo}</p> : null}
        </div>
      </div>
    </header>
  )
}

export default DetalleHero
