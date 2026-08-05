import { SITIO } from '@/config/siteConfig'
import iconoPracticas from '@/assets/icons/practicas.svg'
import iconoVideo from '@/assets/icons/video.svg'
import iconoAsesoria from '@/assets/icons/asesoria.svg'
import iconoUniversidad from '@/assets/icons/universidad.svg'
import AccionesTarjeta from './AccionesTarjeta'
import './TarjetaProducto.css'
import './GradoCard.css'

/** Un icono por beneficio, en el mismo orden que los textos del servicio. */
const ICONOS = [iconoPracticas, iconoVideo, iconoAsesoria, iconoUniversidad]

/**
 * Tarjeta de un grado de secundaria.
 *
 * @param {object} grado  viene de src/services/escolares.js
 */
function GradoCard({ grado }) {
  const { slug, nombre, nombreLargo, imagen, beneficios } = grado

  return (
    <article className="tarjeta-producto grado-card">
      <div className="tarjeta-producto__cabecera grado-card__cabecera">
        <img
          className="tarjeta-producto__fondo"
          src={imagen}
          alt=""
          width={964}
          height={408}
          loading="lazy"
        />
        <div className="tarjeta-producto__velo" />
        <h3 className="tarjeta-producto__titulo">{nombre}</h3>
      </div>

      <div className="tarjeta-producto__cuerpo">
        <ul className="tarjeta-producto__lista">
          {beneficios.map((beneficio, indice) => (
            <li key={beneficio} className="tarjeta-producto__item">
              <img src={ICONOS[indice % ICONOS.length]} alt="" width={20} height={20} />
              <span>{beneficio}</span>
            </li>
          ))}
        </ul>
      </div>

      <AccionesTarjeta
        rutaDetalle={`/escolares/${slug}`}
        mensajeWhatsApp={`Hola, quiero información sobre ${nombreLargo} en ${SITIO.nombre}.`}
      />
    </article>
  )
}

export default GradoCard
