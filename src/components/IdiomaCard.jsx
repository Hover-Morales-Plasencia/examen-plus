import { SITIO } from '@/config/siteConfig'
import AccionesTarjeta from './AccionesTarjeta'
import './TarjetaProducto.css'
import './IdiomaCard.css'

/**
 * Tarjeta de una línea de idiomas.
 *
 * @param {object} idioma  viene de src/services/idiomas.js
 */
function IdiomaCard({ idioma }) {
  const { slug, nombre, imagen, descripcion, certificaciones } = idioma

  return (
    <article className="tarjeta-producto idioma-card">
      <div className="tarjeta-producto__cabecera idioma-card__cabecera">
        <img
          className="tarjeta-producto__fondo"
          src={imagen}
          alt=""
          width={1000}
          height={474}
          loading="lazy"
        />
        <div className="tarjeta-producto__velo" />
        <h3 className="tarjeta-producto__titulo">{nombre}</h3>
      </div>

      <div className="tarjeta-producto__cuerpo">
        <ul className="etiquetas">
          {certificaciones.map((certificacion) => (
            <li key={certificacion} className="etiqueta">
              {certificacion}
            </li>
          ))}
        </ul>
        <p className="idioma-card__descripcion">{descripcion}</p>
      </div>

      <AccionesTarjeta
        rutaDetalle={`/idiomas/${slug}`}
        mensajeWhatsApp={`Hola, quiero información sobre la certificación de ${nombre} en ${SITIO.nombre}.`}
      />
    </article>
  )
}

export default IdiomaCard
