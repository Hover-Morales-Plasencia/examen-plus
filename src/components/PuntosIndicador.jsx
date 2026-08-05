import './PuntosIndicador.css'

/**
 * Puntos que marcan en qué diapositiva estás y permiten saltar a otra.
 *
 * Lo comparten el Hero y el Carrusel: antes cada uno tenía su propia copia del
 * mismo bloque de estilos, con el riesgo de que se desincronizaran.
 *
 * Cada punto es un <button> real y su área táctil son 44px aunque el círculo
 * se vea pequeño.
 *
 * @param {number} total       cuántos puntos hay
 * @param {number} actual      índice activo
 * @param {Function} onIr      qué hacer al pulsar un punto
 * @param {Function} etiqueta  texto accesible de cada punto
 */
function PuntosIndicador({ total, actual, onIr, etiqueta, controla = undefined }) {
  return (
    <div className="puntos">
      {Array.from({ length: total }, (_, indice) => (
        <button
          key={indice}
          type="button"
          className="puntos__punto"
          onClick={() => onIr(indice)}
          aria-label={etiqueta(indice)}
          aria-current={indice === actual ? 'true' : undefined}
          aria-controls={controla}
        />
      ))}
    </div>
  )
}

export default PuntosIndicador
