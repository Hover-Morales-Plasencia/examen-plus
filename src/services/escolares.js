import img1ero from '@/assets/images/escolares/1ero.webp'
import img2do from '@/assets/images/escolares/2do.webp'
import img3ro from '@/assets/images/escolares/3ro.webp'
import img4to from '@/assets/images/escolares/4to.webp'
import img5to from '@/assets/images/escolares/5to.webp'

/** Beneficios comunes a los cinco grados. */
const BENEFICIOS_BASE = [
  'Prácticas guiadas para reforzar tus cursos y aprobar con tranquilidad.',
  'Clases en video seleccionadas con explicaciones claras y ejemplos fáciles.',
  'Asesoramiento personalizado para acompañarte en tu avance.',
]

/** Cuarto y quinto suman preparación para admisión. */
const BENEFICIO_ADMISION =
  'Simulacros tipo admisión para entrenar con el modelo de la universidad que elijas.'

/**
 * Los cinco grados de secundaria.
 *
 * ⚠️ Los `slug` son los del sitio actual y NO se cambian: ya están indexados en
 * Google. Acortarlos perdería el posicionamiento ganado.
 */
export const GRADOS = [
  {
    slug: 'primer-ano-de-secundaria',
    nombre: '1° Secundaria',
    nombreLargo: 'Primer año de secundaria',
    imagen: img1ero,
    beneficios: BENEFICIOS_BASE,
  },
  {
    slug: 'segundo-ano-de-secundaria',
    nombre: '2° Secundaria',
    nombreLargo: 'Segundo año de secundaria',
    imagen: img2do,
    beneficios: BENEFICIOS_BASE,
  },
  {
    slug: 'tercer-ano-de-secundaria',
    nombre: '3° Secundaria',
    nombreLargo: 'Tercer año de secundaria',
    imagen: img3ro,
    beneficios: BENEFICIOS_BASE,
  },
  {
    slug: 'cuarto-ano-de-secundaria',
    nombre: '4° Secundaria',
    nombreLargo: 'Cuarto año de secundaria',
    imagen: img4to,
    beneficios: [...BENEFICIOS_BASE, BENEFICIO_ADMISION],
  },
  {
    slug: 'quinto-ano-de-secundaria',
    nombre: '5° Secundaria',
    nombreLargo: 'Quinto año de secundaria',
    imagen: img5to,
    beneficios: [...BENEFICIOS_BASE, BENEFICIO_ADMISION],
  },
]

/** Busca un grado por su slug. Devuelve undefined si no existe. */
export function buscarGrado(slug) {
  return GRADOS.find((grado) => grado.slug === slug)
}
