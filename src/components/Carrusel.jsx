import { useId } from 'react'
import { useCarrusel } from '@/hooks/useCarrusel'
import { useTarjetasVisibles } from '@/hooks/useTarjetasVisibles'
import PuntosIndicador from './PuntosIndicador'
import './Carrusel.css'

/**
 * Carrusel accesible por teclado.
 *
 * Sustituye al slick.js del sitio original. Puntos clave de accesibilidad:
 * las flechas son <button> reales, los puntos indican la página actual con
 * aria-current, y todo el contenido sigue presente en el DOM (no se oculta
 * con display:none) para que los lectores de pantalla lo encuentren.
 *
 * @param {Array} elementos     los datos a recorrer
 * @param {Function} children   función que pinta cada elemento
 * @param {string} etiqueta     nombre del carrusel para lectores de pantalla
 */
function Carrusel({ elementos, children, etiqueta, porPagina }) {
  const visiblesAuto = useTarjetasVisibles()
  const visibles = porPagina ?? visiblesAuto
  const { pagina, paginas, irA, siguiente, anterior } = useCarrusel(elementos.length, visibles)
  const idPista = useId()

  const hayVariasPaginas = paginas > 1

  return (
    <div className="carrusel" role="group" aria-roledescription="carrusel" aria-label={etiqueta}>
      <div className="carrusel__ventana">
        <ul
          id={idPista}
          className="carrusel__pista"
          /* Excepción admitida a la regla de "nada de estilos inline": estos dos
             valores dependen de la página actual y de cuántas tarjetas caben en
             pantalla, así que no pueden expresarse como una clase CSS estática.
             Ver .claude/skills/react-conventions/SKILL.md §5. */
          // eslint-disable-next-line react/forbid-dom-props
          style={{
            transform: `translateX(-${pagina * 100}%)`,
            /* Cada tarjeta ocupa una fracción del ancho visible. */
            '--tarjetas-visibles': visibles,
          }}
        >
          {elementos.map((elemento, indice) => {
            // Las tarjetas de otras páginas están fuera de la ventana visible.
            // Sin `inert`, el tabulador entraría en sus botones: el foco saltaría
            // a un elemento que no se ve y el usuario perdería la referencia.
            // `inert` las saca del orden de tabulación y de los lectores de
            // pantalla mientras no sean la página actual.
            const fueraDeVista = Math.floor(indice / visibles) !== pagina

            return (
              <li key={elemento.slug} className="carrusel__elemento" inert={fueraDeVista}>
                {children(elemento, indice)}
              </li>
            )
          })}
        </ul>
      </div>

      {hayVariasPaginas ? (
        <>
          <button
            type="button"
            className="carrusel__flecha carrusel__flecha--anterior"
            onClick={anterior}
            aria-label={`${etiqueta}: ver anteriores`}
            aria-controls={idPista}
          >
            <span aria-hidden="true">‹</span>
          </button>

          <button
            type="button"
            className="carrusel__flecha carrusel__flecha--siguiente"
            onClick={siguiente}
            aria-label={`${etiqueta}: ver siguientes`}
            aria-controls={idPista}
          >
            <span aria-hidden="true">›</span>
          </button>

          <div className="carrusel__puntos">
            <PuntosIndicador
              total={paginas}
              actual={pagina}
              onIr={irA}
              controla={idPista}
              etiqueta={(indice) => `Página ${indice + 1} de ${paginas}`}
            />
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Carrusel
