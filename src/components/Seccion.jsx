import './Seccion.css'

/**
 * Envoltorio de las secciones de la home: ancla, antetítulo, título y contenido.
 *
 * Centraliza la jerarquía de headings. En el sitio original cada sección tenía
 * un h6 encima de un h3, y las tarjetas usaban h1: el orden quedaba invertido.
 * Aquí el antetítulo es un <p> (es decorativo) y el título es siempre <h2>,
 * porque el único <h1> de la página vive en el hero.
 *
 * @param {string} fondo  'blanco' | 'claro' | 'gris'
 */
function Seccion({ id, antetitulo, titulo, fondo = 'blanco', children }) {
  const idTitulo = `${id}-titulo`

  return (
    <section id={id} className={`seccion seccion--${fondo}`} aria-labelledby={idTitulo}>
      <div className="seccion__contenedor">
        <header className="seccion__cabecera">
          {antetitulo ? <p className="seccion__antetitulo">{antetitulo}</p> : null}
          <h2 id={idTitulo} className="seccion__titulo">
            {titulo}
          </h2>
        </header>

        {children}
      </div>
    </section>
  )
}

export default Seccion
