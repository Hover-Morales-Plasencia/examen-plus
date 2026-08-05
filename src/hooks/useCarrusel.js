import { useCallback, useMemo, useState } from 'react'

/**
 * Lógica de un carrusel por páginas.
 *
 * Devuelve en qué página estamos y cómo moverse. No sabe nada de cómo se pinta:
 * eso es cosa del componente, para poder reutilizarlo en universidades,
 * escolares e idiomas.
 *
 * @param {number} total          cuántos elementos hay
 * @param {number} porPagina      cuántos se ven a la vez
 * @param {boolean} circular      si al llegar al final vuelve al principio
 */
export function useCarrusel(total, porPagina = 1, circular = true) {
  const [paginaElegida, setPaginaElegida] = useState(0)

  const paginas = useMemo(() => Math.max(1, Math.ceil(total / porPagina)), [total, porPagina])

  // Si la pantalla se ensancha y ahora caben más tarjetas, hay menos páginas y
  // la elegida puede quedar fuera de rango. Se ajusta aquí, durante el render,
  // en vez de con un useEffect: así no hay un render intermedio con un valor
  // inválido ni una cascada de renders.
  const pagina = Math.min(paginaElegida, paginas - 1)

  const irA = useCallback(
    (destino) => {
      if (circular) {
        setPaginaElegida(((destino % paginas) + paginas) % paginas)
      } else {
        setPaginaElegida(Math.max(0, Math.min(destino, paginas - 1)))
      }
    },
    [paginas, circular],
  )

  const siguiente = useCallback(() => irA(pagina + 1), [irA, pagina])
  const anterior = useCallback(() => irA(pagina - 1), [irA, pagina])

  return {
    pagina,
    paginas,
    irA,
    siguiente,
    anterior,
    hayAnterior: circular || pagina > 0,
    haySiguiente: circular || pagina < paginas - 1,
  }
}
