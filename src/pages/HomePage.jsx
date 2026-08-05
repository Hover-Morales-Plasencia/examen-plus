import { OBJETIVOS } from '@/services/objetivos'
import { UNIVERSIDADES } from '@/services/universidades'
import { GRADOS } from '@/services/escolares'
import { IDIOMAS } from '@/services/idiomas'
import { PLANES } from '@/services/planes'
import Hero from '@/components/Hero'
import Seccion from '@/components/Seccion'
import Carrusel from '@/components/Carrusel'
import ObjetivoCard from '@/components/ObjetivoCard'
import UniversidadCard from '@/components/UniversidadCard'
import GradoCard from '@/components/GradoCard'
import IdiomaCard from '@/components/IdiomaCard'
import PlanCard from '@/components/PlanCard'
import './HomePage.css'

/**
 * Página de inicio. Reproduce el orden del sitio original:
 * hero, objetivos, universidades, escolares, idiomas y planes.
 */
function HomePage() {
  return (
    <>
      <Hero />

      <Seccion id="objetivos" titulo="¿Cuál es tu objetivo?" fondo="claro">
        <ul className="home__objetivos">
          {OBJETIVOS.map((objetivo) => (
            <ObjetivoCard key={objetivo.slug} objetivo={objetivo} />
          ))}
        </ul>
      </Seccion>

      <Seccion
        id="universidades"
        antetitulo="Prepárate para la universidad que elijas"
        titulo="Simulacros Universidades"
      >
        <Carrusel elementos={UNIVERSIDADES} etiqueta="Universidades">
          {(universidad) => <UniversidadCard universidad={universidad} />}
        </Carrusel>
      </Seccion>

      <Seccion
        id="escolares"
        antetitulo="Mejora tus notas con un plan hecho para ti"
        titulo="Rendimiento Escolar"
        fondo="gris"
      >
        <Carrusel elementos={GRADOS} etiqueta="Grados de secundaria">
          {(grado) => <GradoCard grado={grado} />}
        </Carrusel>
      </Seccion>

      <Seccion id="idiomas" antetitulo="Logra tu certificado" titulo="Idiomas">
        <ul className="home__idiomas">
          {IDIOMAS.map((idioma) => (
            <li key={idioma.slug}>
              <IdiomaCard idioma={idioma} />
            </li>
          ))}
        </ul>
      </Seccion>

      <Seccion id="planes" antetitulo="Planes ideales para ti" titulo="Planes" fondo="claro">
        <ul className="home__planes">
          {PLANES.map((plan) => (
            <li key={plan.slug}>
              <PlanCard plan={plan} />
            </li>
          ))}
        </ul>
      </Seccion>
    </>
  )
}

export default HomePage
