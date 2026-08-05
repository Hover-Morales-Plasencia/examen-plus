import { Navigate, useParams } from 'react-router-dom'
import { buscarGrado } from '@/services/escolares'
import { buscarPlan } from '@/services/planes'
import { SITIO } from '@/config/siteConfig'
import { useMetaPagina } from '@/hooks/useMetaPagina'
import DetalleHero from '@/components/DetalleHero'
import BloquePlan from '@/components/BloquePlan'
import Boton from '@/components/Boton'
import './DetallePage.css'

/**
 * Página propia de cada grado: /escolares/{slug}
 *
 * ⚠️ Los slug son los del sitio anterior porque ya están indexados en Google.
 */
function GradoPage() {
  const { slug } = useParams()
  const grado = buscarGrado(slug)

  useMetaPagina(
    grado ? grado.nombreLargo : null,
    grado
      ? `Refuerza tus cursos de ${grado.nombreLargo} con prácticas guiadas, clases en video y asesoramiento personalizado.`
      : null,
  )

  if (!grado) return <Navigate to="/404" replace />

  const { nombre, nombreLargo, imagen, beneficios } = grado
  const plan = buscarPlan('escolar')

  return (
    <>
      <DetalleHero titulo={nombreLargo} subtitulo="Rendimiento Escolar" imagen={imagen} />

      <div className="detalle">
        <div className="detalle__contenedor">
          <section className="detalle__bloque" aria-labelledby="que-incluye">
            <h2 id="que-incluye" className="detalle__titulo">
              Qué incluye tu plan de {nombre}
            </h2>
            <ul className="detalle__lista">
              {beneficios.map((beneficio) => (
                <li key={beneficio} className="detalle__item">
                  {beneficio}
                </li>
              ))}
            </ul>
          </section>

          <BloquePlan
            plan={plan}
            mensaje={`Hola, quiero adquirir el plan de ${nombreLargo} en ${SITIO.nombre}.`}
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

export default GradoPage
