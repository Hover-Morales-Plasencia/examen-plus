import imgIngles from '@/assets/images/idiomas/ingles.webp'
import imgFrances from '@/assets/images/idiomas/frances.webp'
import imgOtros from '@/assets/images/idiomas/otros-idiomas.webp'

/**
 * Las tres líneas de certificación de idiomas.
 *
 * ⚠️ Los `slug` son los del sitio actual y NO se cambian: ya están indexados.
 */
export const IDIOMAS = [
  {
    slug: 'ingles',
    nombre: 'Inglés',
    imagen: imgIngles,
    certificaciones: ['TOEFL', 'IELTS', 'Cambridge'],
    descripcion:
      'Practica para tus certificaciones internacionales (TOEFL, IELTS, Cambridge) con simulacros reales, preguntas tipo examen y estrategias para mejorar tu puntaje.',
  },
  {
    slug: 'frances',
    nombre: 'Francés',
    imagen: imgFrances,
    certificaciones: ['DELF', 'DALF'],
    descripcion:
      'Refuerza tu preparación para las certificaciones DELF y DALF con ejercicios por nivel, comprensión lectora, escucha y prácticas similares al examen oficial.',
  },
  {
    slug: 'otros-idiomas',
    nombre: 'Otros Idiomas',
    imagen: imgOtros,
    certificaciones: ['Alemán', 'Portugués', 'Chino mandarín', 'Italiano', 'Japonés'],
    descripcion:
      'Practica con preguntas tipo examen y ejercicios progresivos para certificaciones en alemán, portugués, chino mandarín, italiano, japonés y más.',
  },
]

/** Busca un idioma por su slug. Devuelve undefined si no existe. */
export function buscarIdioma(slug) {
  return IDIOMAS.find((idioma) => idioma.slug === slug)
}
