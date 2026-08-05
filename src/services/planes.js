/**
 * Los tres planes de suscripción. Precios en soles.
 *
 * `ancla` apunta a la sección de la home que corresponde a cada plan.
 */
export const PLANES = [
  {
    slug: 'universidades',
    nombre: 'Simulacros Universidades',
    precioMensual: 30,
    precioSemestral: 175,
    ancla: '#universidades',
    beneficios: [
      {
        titulo: 'Simulacros tipo admisión',
        detalle: 'entrena con modelos reales para universidades nacionales y privadas.',
      },
      {
        titulo: 'Clases selectas por curso',
        detalle: 'contenido adecuado al formato y exigencia de la universidad que elegiste.',
      },
      {
        titulo: 'Prácticas por cursos y temas',
        detalle: 'preguntas actualizadas organizadas por áreas académicas.',
      },
      {
        titulo: 'Reportes y análisis de errores',
        detalle: 'identifica tus fallas y mejora tu rendimiento con claridad.',
      },
      {
        titulo: 'Asesoría constante',
        detalle:
          'acompañamiento durante toda tu preparación para resolver dudas y guiar tu avance.',
      },
    ],
  },
  {
    slug: 'escolar',
    nombre: 'Rendimiento Escolar',
    precioMensual: 40,
    precioSemestral: 230,
    ancla: '#escolares',
    destacado: true,
    beneficios: [
      {
        titulo: 'Prácticas guiadas',
        detalle: 'refuerza tus cursos y aprueba con tranquilidad.',
      },
      {
        titulo: 'Clases en video selectas',
        detalle: 'explicaciones claras y ejemplos fáciles para entender más rápido.',
      },
      {
        titulo: 'Asesoramiento personalizado',
        detalle: 'acompañamiento constante para resolver dudas y avanzar sin trabas.',
      },
      {
        titulo: 'Reporte para padres o tutores',
        detalle: 'información clara del avance académico y áreas a reforzar.',
      },
      {
        titulo: 'Actividades interactivas',
        detalle: 'aprendizaje dinámico y efectivo para mantener al estudiante comprometido.',
      },
    ],
  },
  {
    slug: 'idiomas',
    nombre: 'Exámenes de Idiomas',
    precioMensual: 55,
    precioSemestral: 310,
    ancla: '#idiomas',
    beneficios: [
      {
        titulo: 'Simulacros por certificación',
        detalle: 'practica con modelos reales de TOEFL, IELTS, Cambridge, DELF/DALF y más.',
      },
      {
        titulo: 'Ejercicios por nivel y sección',
        detalle: 'reading, listening, grammar, writing y más, según el formato oficial.',
      },
      {
        titulo: 'Simulación oral mensual',
        detalle: 'una entrevista práctica al mes para mejorar tu fluidez.',
      },
      {
        titulo: 'Clases en video por nivel',
        detalle: 'contenido selecto con estrategias claras y fáciles de aplicar.',
      },
      {
        titulo: 'Asesoría personalizada',
        detalle: 'acompañamiento constante para guiar tu preparación.',
      },
    ],
  },
]

/** Busca un plan por su slug. Devuelve undefined si no existe. */
export function buscarPlan(slug) {
  return PLANES.find((plan) => plan.slug === slug)
}
