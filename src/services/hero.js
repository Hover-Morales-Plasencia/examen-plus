import heroEscolar from '@/assets/images/hero/escolar.webp'
import heroIdiomas from '@/assets/images/hero/idiomas.webp'
import heroUniversidades from '@/assets/images/hero/universidades.webp'

import iconoUniversidad from '@/assets/icons/universidad.svg'
import iconoGraduacion from '@/assets/icons/graduacion.svg'
import iconoIdiomas from '@/assets/icons/idiomas.svg'

/** Las tres imágenes que rotan en el hero, una por línea de producto. */
export const HERO_SLIDES = [
  {
    slug: 'escolar',
    titulo: 'Rendimiento escolar',
    imagen: heroEscolar,
    alt: 'Estudiante de secundaria con una medalla, acompañado de sus padres',
  },
  {
    slug: 'idiomas',
    titulo: 'Certificación de idiomas',
    imagen: heroIdiomas,
    alt: 'Estudiante con banderas de Estados Unidos y Francia, y monumentos de fondo',
  },
  {
    slug: 'universidades',
    titulo: 'Ingreso a la universidad',
    imagen: heroUniversidades,
    alt: 'Estudiantes de medicina, ingeniería y negocios con escudos de universidades peruanas',
  },
]

/** Las tres promesas que acompañan al titular. */
export const HERO_VENTAJAS = [
  { texto: 'Logra tu ingreso a la universidad.', icono: iconoUniversidad },
  { texto: 'Destaca como el mejor alumno del colegio.', icono: iconoGraduacion },
  { texto: 'Certifícate en el idioma que necesitas.', icono: iconoIdiomas },
]
