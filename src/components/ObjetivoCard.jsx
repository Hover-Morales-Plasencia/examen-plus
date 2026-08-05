import './ObjetivoCard.css'

/**
 * Una de las tres puertas de entrada de "¿Cuál es tu objetivo?".
 *
 * La tarjeta entera es un enlace al ancla correspondiente. Se usa <a> y no un
 * <div onClick> porque navega: así funciona con Tab, con Enter y con el clic
 * derecho para abrir en otra pestaña.
 *
 * @param {object} objetivo  viene de src/services/objetivos.js
 */
function ObjetivoCard({ objetivo }) {
  const { titulo, icono, descripcion, ancla } = objetivo

  return (
    <li className="objetivo-card">
      <a href={ancla} className="objetivo-card__enlace">
        <img src={icono} alt="" width={40} height={40} aria-hidden="true" />
        <h3 className="objetivo-card__titulo">{titulo}</h3>
        <p className="objetivo-card__descripcion">{descripcion}</p>
      </a>
    </li>
  )
}

export default ObjetivoCard
