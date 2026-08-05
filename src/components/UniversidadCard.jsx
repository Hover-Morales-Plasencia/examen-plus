import { SITIO } from '@/config/siteConfig'
import iconoPracticas from '@/assets/icons/practicas.svg'
import iconoVideo from '@/assets/icons/video.svg'
import iconoAsesoria from '@/assets/icons/asesoria.svg'
import AccionesTarjeta from './AccionesTarjeta'
import './TarjetaProducto.css'
import './UniversidadCard.css'

/** Un icono por beneficio, en el mismo orden que los textos del servicio. */
const ICONOS = [iconoPracticas, iconoVideo, iconoAsesoria]

/**
 * Tarjeta de una universidad en el carrusel de la home.
 *
 * @param {object} universidad  viene de src/services/universidades.js
 */
function UniversidadCard({ universidad }) {
  const { slug, sigla, nombre, escudo, campus, beneficios } = universidad

  return (
    <article className="tarjeta-producto uni-card">
      <div className="tarjeta-producto__cabecera uni-card__cabecera">
        <img
          className="tarjeta-producto__fondo"
          src={campus}
          alt=""
          width={1024}
          height={576}
          loading="lazy"
        />
        <div className="tarjeta-producto__velo" />
        <div className="uni-card__identidad">
          <img
            className="uni-card__escudo"
            src={escudo}
            alt={`Escudo de la ${nombre}`}
            width={72}
            height={72}
            loading="lazy"
          />
          <div>
            <h3 className="uni-card__sigla">{sigla}</h3>
            <p className="uni-card__nombre">{nombre}</p>
          </div>
        </div>
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
        rutaDetalle={`/universidades/${slug}`}
        mensajeWhatsApp={`Hola, quiero información sobre los simulacros ${sigla} de ${SITIO.nombre}.`}
      />
    </article>
  )
}

export default UniversidadCard
