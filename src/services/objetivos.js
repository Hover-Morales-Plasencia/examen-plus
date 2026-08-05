import iconoUniversidad from '@/assets/icons/universidad.svg'
import iconoGraduacion from '@/assets/icons/graduacion.svg'
import iconoIdiomas from '@/assets/icons/idiomas.svg'

/** Las tres puertas de entrada de la sección "¿Cuál es tu objetivo?". */
export const OBJETIVOS = [
  {
    slug: 'universidades',
    titulo: 'Ingresa la Universidad',
    icono: iconoUniversidad,
    descripcion:
      'Prepárate con simulacros reales, temarios actualizados y una plataforma diseñada para llevarte directo a tu vacante.',
    ancla: '#universidades',
  },
  {
    slug: 'escolares',
    titulo: 'Rendimiento Escolar',
    icono: iconoGraduacion,
    descripcion:
      'Refuerza tus cursos por niveles, practica por temas y mejora tu rendimiento con ejercicios que se adaptan a ti.',
    ancla: '#escolares',
  },
  {
    slug: 'idiomas',
    titulo: 'Certificación Idiomas',
    icono: iconoIdiomas,
    descripcion:
      'Entrena con modelos de examen internacionales y practica lo esencial para obtener tu certificación con seguridad.',
    ancla: '#idiomas',
  },
]
