import { Navigate, useParams } from 'react-router-dom'
import { buscarIdioma } from '@/services/idiomas'
import { buscarPlan } from '@/services/planes'
import { SITIO } from '@/config/siteConfig'
import { useMetaPagina } from '@/hooks/useMetaPagina'
import DetalleHero from '@/components/DetalleHero'
import BloquePlan from '@/components/BloquePlan'
import Boton from '@/components/Boton'
import './DetallePage.css'

/**
 * Página propia de cada idioma: /idiomas/{slug}
 *
 * ⚠️ Los slug son los del sitio anterior porque ya están indexados en Google.
 */
function IdiomaPage() {
  const { slug } = useParams()
  const idioma = buscarIdioma(slug)

  useMetaPagina(
    idioma ? `Certificación de ${idioma.nombre}` : null,
    idioma ? idioma.descripcion : null,
  )

  if (!idioma) return <Navigate to="/404" replace />

  const { nombre, imagen, descripcion, certificaciones } = idioma
  const plan = buscarPlan('idiomas')

  return (
    <>
      <DetalleHero
        titulo={`Certificación de ${nombre}`}
        subtitulo="Exámenes de Idiomas"
        imagen={imagen}
      />

      <div className="detalle">
        <div className="detalle__contenedor">
          <section className="detalle__bloque" aria-labelledby="preparacion">
            <h2 id="preparacion" className="detalle__titulo">
              Tu preparación en {nombre}
            </h2>
            <p className="detalle__parrafo">{descripcion}</p>
          </section>

          <section className="detalle__bloque" aria-labelledby="certificaciones">
            <h2 id="certificaciones" className="detalle__titulo">
              Certificaciones que cubrimos
            </h2>
            <ul className="etiquetas">
              {certificaciones.map((certificacion) => (
                <li key={certificacion} className="etiqueta">
                  {certificacion}
                </li>
              ))}
            </ul>
          </section>

          <BloquePlan
            plan={plan}
            mensaje={`Hola, quiero adquirir la certificación de ${nombre} en ${SITIO.nombre}.`}
          />

          <p className="detalle__volver">
            <Boton para="/" variante="texto">
              <span aria-hidden="true">←</span> Volver al inicio
            </Boton>
          </p>
        </div>
      </div>
    </>
  )
}

export default IdiomaPage
