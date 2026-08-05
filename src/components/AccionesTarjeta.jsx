import { TEXTOS, urlWhatsApp } from '@/config/siteConfig'
import Boton from './Boton'
import IconoWhatsApp from './IconoWhatsApp'
import './AccionesTarjeta.css'

/**
 * Pie de las tarjetas de producto: "Más información" + "Adquirir".
 *
 * Lo comparten UniversidadCard, GradoCard e IdiomaCard. Centralizarlo importa
 * porque el destino del botón "Adquirir" está por decidir: cuando se resuelva,
 * se cambia aquí y no en tres sitios.
 *
 * @param {string} rutaDetalle      ruta interna de la página propia
 * @param {string} mensajeWhatsApp  texto con el que se abre WhatsApp
 */
function AccionesTarjeta({ rutaDetalle, mensajeWhatsApp }) {
  return (
    <div className="acciones-tarjeta">
      <Boton para={rutaDetalle} variante="secundario">
        {TEXTOS.ctaMasInfo}
      </Boton>

      {/* PENDIENTE: destino final del botón "Adquirir". Vender en línea exige
          pasarela de pago, que es backend. Por ahora abre WhatsApp. */}
      <Boton
        href={urlWhatsApp(mensajeWhatsApp)}
        externo
        variante="adquirir"
        icono={<IconoWhatsApp />}
      >
        {TEXTOS.ctaAdquirir}
      </Boton>
    </div>
  )
}

export default AccionesTarjeta
