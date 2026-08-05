import { Navigate, useParams } from 'react-router-dom'
import { buscarUniversidad } from '@/services/universidades'
import { buscarPlan } from '@/services/planes'
import { SITIO } from '@/config/siteConfig'
import { useMetaPagina } from '@/hooks/useMetaPagina'
import DetalleHero from '@/components/DetalleHero'
import BloquePlan from '@/components/BloquePlan'
import Boton from '@/components/Boton'
import './DetallePage.css'

/**
 * Página propia de cada universidad: /universidades/{slug}
 *
 * Existe una por universidad, en vez de una sola con filtros, para que Google
 * pueda indexar y posicionar cada una por su nombre.
 */
function UniversidadPage() {
  const { slug } = useParams()
  const universidad = buscarUniversidad(slug)

  useMetaPagina(
    universidad ? `Simulacros ${universidad.sigla}` : null,
    universidad
      ? `Prepárate para el examen de admisión de la ${universidad.nombre} con simulacros tipo ${universidad.sigla}, clases selectas y prácticas por curso.`
      : null,
  )

  if (!universidad) return <Navigate to="/404" replace />

  const { sigla, nombre, ciudad, escudo, campus, areas, beneficios } = universidad
  const plan = buscarPlan('universidades')

  return (
    <>
      <DetalleHero
        titulo={`Simulacros ${sigla}`}
        subtitulo={nombre}
        imagen={campus}
        escudo={escudo}
        altEscudo={`Escudo de la ${nombre}`}
      />

      <div className="detalle">
        <div className="detalle__contenedor">
          <section className="detalle__bloque" aria-labelledby="que-incluye">
            <h2 id="que-incluye" className="detalle__titulo">
              Qué incluye tu preparación
            </h2>
            <ul className="detalle__lista">
              {beneficios.map((beneficio) => (
                <li key={beneficio} className="detalle__item">
                  {beneficio}
                </li>
              ))}
            </ul>
          </section>

          <section className="detalle__bloque" aria-labelledby="areas">
            <h2 id="areas" className="detalle__titulo">
              Áreas del examen {sigla}
            </h2>
            <p className="detalle__parrafo">
              La {nombre} evalúa por áreas. Practica con simulacros del área que te corresponde:
            </p>
            <ul className="etiquetas">
              {areas.map((area) => (
                <li key={area} className="etiqueta">
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <BloquePlan
            plan={plan}
            nota={`Sede en ${ciudad}`}
            mensaje={`Hola, quiero adquirir los simulacros ${sigla} de ${SITIO.nombre}.`}
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

export default UniversidadPage
