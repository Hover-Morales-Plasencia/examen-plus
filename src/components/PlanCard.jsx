import { SITIO, TEXTOS, urlWhatsApp } from '@/config/siteConfig'
import Boton from './Boton'
import IconoWhatsApp from './IconoWhatsApp'
import './PlanCard.css'

/**
 * Tarjeta de un plan de suscripción.
 *
 * @param {object} plan  viene de src/services/planes.js
 */
function PlanCard({ plan }) {
  const { nombre, precioMensual, precioSemestral, beneficios, destacado = false } = plan

  return (
    <article className={`plan-card ${destacado ? 'plan-card--destacado' : ''}`}>
      <h3 className="plan-card__nombre">{nombre}</h3>

      <p className="plan-card__precio">
        <span className="plan-card__monto">
          {SITIO.moneda}
          {precioMensual}
        </span>
        <span className="plan-card__periodo"> {TEXTOS.periodoMensual}</span>
      </p>

      <p className="plan-card__semestral">
        {SITIO.moneda}
        {precioSemestral} {TEXTOS.periodoSemestral}
      </p>

      <ul className="plan-card__beneficios">
        {beneficios.map((beneficio) => (
          <li key={beneficio.titulo} className="plan-card__beneficio">
            <strong>{beneficio.titulo}:</strong> {beneficio.detalle}
          </li>
        ))}
      </ul>

      {/* PENDIENTE: destino final del botón "Adquirir". */}
      <Boton
        href={urlWhatsApp(`Hola, quiero adquirir el plan ${nombre} de ${SITIO.nombre}.`)}
        externo
        variante="adquirir"
        icono={<IconoWhatsApp />}
        className="plan-card__cta"
      >
        {TEXTOS.ctaAdquirir}
      </Boton>
    </article>
  )
}

export default PlanCard
