import { SITIO, TEXTOS, urlWhatsApp } from '@/config/siteConfig'
import Boton from './Boton'
import IconoWhatsApp from './IconoWhatsApp'
import './BloquePlan.css'

/**
 * Bloque de precio y compra que cierra las páginas de detalle.
 *
 * Lo comparten UniversidadPage, GradoPage e IdiomaPage: antes estaba copiado
 * en las tres. Cuando se decida el destino final del botón "Adquirir", basta
 * con cambiarlo aquí.
 *
 * @param {object} plan          viene de src/services/planes.js
 * @param {string} mensaje       texto con el que se abre WhatsApp
 * @param {string} [nota]        línea extra bajo el precio semestral
 */
function BloquePlan({ plan, mensaje, nota = null }) {
  return (
    <section className="bloque-plan" aria-labelledby="plan">
      <h2 id="plan" className="bloque-plan__titulo">
        Plan {plan.nombre}
      </h2>

      <p className="bloque-plan__precio">
        {SITIO.moneda}
        {plan.precioMensual} <span>{TEXTOS.periodoMensual}</span>
      </p>

      <p className="bloque-plan__semestral">
        {SITIO.moneda}
        {plan.precioSemestral} {TEXTOS.periodoSemestral}
        {nota ? ` · ${nota}` : null}
      </p>

      {/* PENDIENTE: destino final del botón "Adquirir". Vender en línea exige
          pasarela de pago, que es backend. Por ahora abre WhatsApp. */}
      <Boton
        href={urlWhatsApp(mensaje)}
        externo
        variante="adquirir"
        tamano="lg"
        icono={<IconoWhatsApp />}
      >
        {TEXTOS.ctaAdquirir}
      </Boton>
    </section>
  )
}

export default BloquePlan
