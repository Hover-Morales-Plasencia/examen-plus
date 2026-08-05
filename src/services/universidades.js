import escudoUni from '@/assets/images/universidades/escudos/uni.webp'
import escudoUnc from '@/assets/images/universidades/escudos/unc.webp'
import escudoUnsa from '@/assets/images/universidades/escudos/unsa.webp'
import escudoUnt from '@/assets/images/universidades/escudos/unt.webp'
import escudoUnmsm from '@/assets/images/universidades/escudos/unmsm.webp'
import escudoUp from '@/assets/images/universidades/escudos/up.webp'
import escudoUpch from '@/assets/images/universidades/escudos/upch.webp'
import escudoPucp from '@/assets/images/universidades/escudos/pucp.webp'
import escudoUpao from '@/assets/images/universidades/escudos/upao.webp'
import escudoUpn from '@/assets/images/universidades/escudos/upn.webp'

import campusUni from '@/assets/images/universidades/campus/uni.webp'
import campusUnc from '@/assets/images/universidades/campus/unc.webp'
import campusUnsa from '@/assets/images/universidades/campus/unsa.webp'
import campusUnt from '@/assets/images/universidades/campus/unt.webp'
import campusUnmsm from '@/assets/images/universidades/campus/unmsm.webp'
import campusUp from '@/assets/images/universidades/campus/up.webp'
import campusUpch from '@/assets/images/universidades/campus/upch.webp'
import campusPucp from '@/assets/images/universidades/campus/pucp.webp'
import campusUpao from '@/assets/images/universidades/campus/upao.webp'
import campusUpn from '@/assets/images/universidades/campus/upn.webp'

/**
 * Las 10 universidades con simulacros. Los textos vienen del sitio original.
 *
 * `slug` forma la ruta /universidades/{slug} y también nombra los archivos de
 * imagen, así que no se cambia sin renombrar también los assets.
 */
export const UNIVERSIDADES = [
  {
    slug: 'uni',
    sigla: 'UNI',
    nombre: 'Universidad Nacional de Ingeniería',
    ciudad: 'Lima',
    tipo: 'nacional',
    escudo: escudoUni,
    campus: campusUni,
    areas: ['A', 'B', 'C'],
    beneficios: [
      'Realiza múltiples simulacros tipo UNI para las áreas A, B y C, y evalúa tu avance rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema, alineadas al examen UNI.',
      'Practica con exámenes individuales organizados por curso y por tema para reforzar tus bases y dominar todo el temario oficial.',
    ],
  },
  {
    slug: 'unc',
    sigla: 'UNC',
    nombre: 'Universidad Nacional de Cajamarca',
    ciudad: 'Cajamarca',
    tipo: 'nacional',
    escudo: escudoUnc,
    campus: campusUnc,
    areas: ['A', 'B', 'C', 'D', 'E'],
    beneficios: [
      'Realiza múltiples simulacros tipo UNC para los módulos A, B, C, D y E, y monitorea tu progreso rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema, alineadas al examen UNC.',
      'Practica con exámenes individuales organizados por curso y por tema para dominar todo el temario oficial.',
    ],
  },
  {
    slug: 'unsa',
    sigla: 'UNSA',
    nombre: 'Universidad Nacional de San Agustín de Arequipa',
    ciudad: 'Arequipa',
    tipo: 'nacional',
    escudo: escudoUnsa,
    campus: campusUnsa,
    areas: ['Biomédicas', 'Ingenierías', 'Sociales', 'Empresariales'],
    beneficios: [
      'Realiza múltiples simulacros tipo UNSA para las áreas Biomédicas, Ingenierías, Sociales y Empresariales, y sigue tu avance rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema tipo UNSA.',
      'Practica con exámenes individuales organizados por curso y por tema tipo UNSA.',
    ],
  },
  {
    slug: 'unt',
    sigla: 'UNT',
    nombre: 'Universidad Nacional de Trujillo',
    ciudad: 'Trujillo',
    tipo: 'nacional',
    escudo: escudoUnt,
    campus: campusUnt,
    areas: ['A', 'B', 'C', 'D'],
    beneficios: [
      'Realiza múltiples simulacros tipo UNT para las áreas A, B, C y D, y observa tu progreso rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema tipo UNT.',
      'Practica con exámenes individuales organizados por curso y por tema tipo UNT.',
    ],
  },
  {
    slug: 'unmsm',
    sigla: 'UNMSM',
    nombre: 'Universidad Nacional Mayor de San Marcos',
    ciudad: 'Lima',
    tipo: 'nacional',
    escudo: escudoUnmsm,
    campus: campusUnmsm,
    areas: ['A', 'B', 'C', 'D', 'E', 'H'],
    beneficios: [
      'Realiza múltiples simulacros tipo San Marcos para las áreas A, B, C, D, E y H, y mide tu progreso rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema tipo UNMSM.',
      'Practica con exámenes individuales organizados por curso y por tema tipo UNMSM.',
    ],
  },
  {
    slug: 'up',
    sigla: 'UP',
    nombre: 'Universidad del Pacífico',
    ciudad: 'Lima',
    tipo: 'privada',
    escudo: escudoUp,
    campus: campusUp,
    areas: ['Economía', 'Negocios', 'Ingeniería'],
    beneficios: [
      'Realiza múltiples simulacros tipo UP y evalúa tu avance rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema tipo UP.',
      'Practica con exámenes individuales organizados por curso y por tema tipo UP.',
    ],
  },
  {
    slug: 'upch',
    sigla: 'UPCH',
    nombre: 'Universidad Peruana Cayetano Heredia',
    ciudad: 'Lima',
    tipo: 'privada',
    escudo: escudoUpch,
    campus: campusUpch,
    areas: ['Ciencias de la Salud', 'Ciencias'],
    beneficios: [
      'Realiza múltiples simulacros tipo UPCH y evalúa tu avance rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema tipo UPCH.',
      'Practica con exámenes individuales organizados por curso y por tema tipo UPCH.',
    ],
  },
  {
    slug: 'pucp',
    sigla: 'PUCP',
    nombre: 'Pontificia Universidad Católica del Perú',
    ciudad: 'Lima',
    tipo: 'privada',
    escudo: escudoPucp,
    campus: campusPucp,
    areas: ['Letras', 'Ciencias', 'Arte'],
    beneficios: [
      'Realiza múltiples simulacros tipo PUCP y evalúa tu avance rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema tipo PUCP.',
      'Practica con exámenes individuales organizados por curso y por tema tipo PUCP.',
    ],
  },
  {
    slug: 'upao',
    sigla: 'UPAO',
    nombre: 'Universidad Privada Antenor Orrego',
    ciudad: 'Trujillo',
    tipo: 'privada',
    escudo: escudoUpao,
    campus: campusUpao,
    areas: ['Ciencias de la Salud', 'Ingeniería', 'Ciencias Económicas'],
    beneficios: [
      'Realiza múltiples simulacros tipo UPAO y evalúa tu avance rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema tipo UPAO.',
      'Practica con exámenes individuales organizados por curso y por tema tipo UPAO.',
    ],
  },
  {
    slug: 'upn',
    sigla: 'UPN',
    nombre: 'Universidad Privada del Norte',
    ciudad: 'Trujillo',
    tipo: 'privada',
    escudo: escudoUpn,
    campus: campusUpn,
    areas: ['Ingeniería', 'Negocios', 'Salud'],
    beneficios: [
      'Realiza múltiples simulacros tipo UPN y evalúa tu avance rumbo al ingreso.',
      'Estudia con nuestra colección de clases selectas por curso y tema tipo UPN.',
      'Practica con exámenes individuales organizados por curso y por tema tipo UPN.',
    ],
  },
]

/** Busca una universidad por su slug. Devuelve undefined si no existe. */
export function buscarUniversidad(slug) {
  return UNIVERSIDADES.find((universidad) => universidad.slug === slug)
}
