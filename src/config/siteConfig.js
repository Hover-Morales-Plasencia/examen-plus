/**
 * siteConfig.js — Fuente única de verdad del sitio.
 *
 * Todo valor que se repite en el sitio vive aquí: colores, tipografía, datos de
 * contacto, textos de marca y enlaces externos.
 *
 * La regla es simple: si un valor aparece en más de un sitio, va aquí.
 * Así cambiarlo es UNA edición y no una cacería por todo el proyecto.
 *
 * ❌ Nunca escribas un color, un teléfono o el nombre del sitio directamente
 *    dentro de un componente.
 * ✅ Impórtalo desde aquí, o usa la variable CSS equivalente.
 *
 * ⚠️ ESPEJO MANUAL: src/styles/variables.css contiene los mismos valores como
 *    variables CSS. Si tocas uno, TIENES que tocar el otro. No hay nada que lo
 *    verifique automáticamente.
 *
 * ⚠️ IDIOMA: las claves de COLORES están en inglés a propósito (primary,
 *    secondary…) porque es el estándar universal en sistemas de diseño y coincide
 *    con las variables del sitio original. El resto del archivo va en español,
 *    como el resto del proyecto.
 */

const NOMBRE = 'Examen Plus'
const LEMA = 'Logra ser el mejor'

// ---------------------------------------------------------------------------
// Identidad
// ---------------------------------------------------------------------------

export const SITIO = {
  nombre: NOMBRE,
  lema: LEMA,
  // Se compone para que cambiar el lema arrastre también el título.
  titulo: `${NOMBRE} – ${LEMA}`,
  descripcion:
    'Prepárate para tu examen de admisión, mejora tu rendimiento escolar y certifícate en idiomas con simulacros reales y clases selectas.',
  url: 'https://examenplus.com',
  idioma: 'es-PE',
  pais: 'Perú',
  moneda: 'S/',
}

// ---------------------------------------------------------------------------
// Contacto
//
// TODO: reemplazar por los datos reales cuando se definan.
// Al cambiarlos aquí se actualizan en todo el sitio automáticamente.
// ---------------------------------------------------------------------------

export const CONTACTO = {
  // TODO: número real. Formato internacional sin +, espacios ni guiones.
  whatsapp: '51999999999',
  // TODO: email real.
  email: 'contacto@examenplus.com',
  // TODO: teléfono real, o dejar null si no habrá.
  telefono: null,
}

/** Arma el enlace de WhatsApp con un mensaje ya escrito. */
export function urlWhatsApp(mensaje = '') {
  const base = `https://wa.me/${CONTACTO.whatsapp}`
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base
}

// ---------------------------------------------------------------------------
// Redes sociales
//
// TODO: completar con los perfiles reales. Las que queden en null no se pintan.
// ---------------------------------------------------------------------------

export const REDES = {
  facebook: null,
  instagram: null,
  tiktok: null,
  youtube: null,
}

/**
 * Solo las redes con perfil definido, listas para pintar.
 * Vive aquí, junto a los datos, para que cualquier componente que las muestre
 * use el mismo criterio sin repetir el filtro.
 */
export function redesActivas() {
  return Object.entries(REDES).filter(([, url]) => Boolean(url))
}

// ---------------------------------------------------------------------------
// Enlaces externos
// ---------------------------------------------------------------------------

export const ENLACES_EXTERNOS = {
  /** Moodle propio donde estudian los alumnos. No se migra: solo se enlaza. */
  plataformaAlumnos: 'https://alumnos.examenplus.com/login/index.php',
}

// ---------------------------------------------------------------------------
// Navegación principal
// ---------------------------------------------------------------------------

export const NAVEGACION = [
  { etiqueta: 'Inicio', href: '/' },
  { etiqueta: 'Universidades', href: '/#universidades' },
  { etiqueta: 'Escolares', href: '/#escolares' },
  { etiqueta: 'Idiomas', href: '/#idiomas' },
  { etiqueta: 'Planes', href: '/#planes' },
]

// ---------------------------------------------------------------------------
// Colores
//
// Los colores de marca se conservan tal cual del sitio original. Lo que se
// separa es el USO: un color puede ser perfecto para un logo y no servir para
// texto, porque el texto necesita contraste y un logo no.
//
//   primary / secondary          -> marca pura: logos, fondos, degradados decorativos
//   primaryDeep / secondaryDeep  -> mismas familias, oscurecidas lo justo para
//                                   llevar texto blanco encima o ser texto ellas
//                                   mismas sobre cualquier fondo claro del sitio
//
// El "accent" verde #61CE70 del sitio original NO está aquí: era el valor por
// defecto de Elementor y tenía 0 usos reales en todo el CSS.
// ---------------------------------------------------------------------------

export const COLORES = {
  /** Morado de marca. Logo y elementos decorativos. NO llevar texto encima (4.37:1). */
  primary: '#6464FF',
  /** Morado para superficies con texto blanco: botones, badges. 5.09:1. */
  primaryDeep: '#5C5CE6',

  /** Azul de marca. Degradados y elementos gráficos. NO usar como texto (2.80:1). */
  secondary: '#279FFF',
  /** Azul para titulares grandes resaltados (>=24px). 3.43:1, cumple el 3:1 de texto grande. */
  secondaryTitle: '#1E8FE6',
  /**
   * Azul para texto normal, enlaces y superficies con texto blanco.
   * Cumple 4.5:1 sobre los tres fondos claros del sitio:
   * 5.21:1 sobre `white` · 4.64:1 sobre `light` · 4.95:1 sobre `grayBg`.
   */
  secondaryDeep: '#0E70B8',

  /** Texto principal sobre fondo claro. 12.82:1 sobre blanco. */
  text: '#323232',
  /**
   * Texto secundario.
   * 4.74:1 sobre `white` OK - 4.51:1 sobre `grayBg` OK - 4.22:1 sobre `light` NO
   * NO usar sobre `light`: ahi no cumple a ningun tamano por debajo de 24px.
   */
  textMuted: '#737373',
  /** Negro de marca. Titulares de alto contraste. */
  dark: '#1C1C1C',

  white: '#FFFFFF',
  /** Fondo lila suave. Secciones alternas y tarjetas. */
  light: '#EFF1FF',
  /** Gris muy claro. Fondo de secciones. */
  grayBg: '#F9F9FA',

  /** Separadores decorativos. 1.27:1 - NO sirve para bordes de campos. */
  border: '#E5E4E7',
  /** Bordes de inputs y anillos de foco. 4.49:1 sobre blanco. */
  borderInput: '#767680',
}

/**
 * Degradados del sitio original.
 *
 * `boton` usa las variantes Deep porque lleva texto blanco encima y tiene que
 * ser legible en TODO su ancho, no solo en un extremo.
 * `marca` conserva los colores puros para superficies sin texto.
 * `tarjeta` oscurece la base de las imagenes (20.38:1 con texto blanco).
 */
export const DEGRADADOS = {
  boton: 'linear-gradient(90deg, #5C5CE6 0%, #0E70B8 100%)',
  botonVertical: 'linear-gradient(180deg, #5C5CE6 0%, #0E70B8 100%)',
  marca: 'linear-gradient(90deg, #6464FF 0%, #279FFF 100%)',
  tarjeta: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)',
}

/**
 * Capas oscuras sobre imágenes, para que el texto encima se lea.
 *
 * ⚠️ Solo `fuerte` (12.63:1) y `medio` (5.74:1) admiten texto blanco encima.
 *    `suave` (1.84:1) y `sutil` (1.32:1) son puramente decorativos.
 */
export const OVERLAYS = {
  fuerte: 'rgba(0, 0, 0, 0.8)',
  medio: 'rgba(0, 0, 0, 0.6)',
  suave: 'rgba(0, 0, 0, 0.25)',
  sutil: 'rgba(0, 0, 0, 0.12)',
  /** Velo lila translúcido sobre tarjetas claras. Decorativo. */
  lila: 'rgba(239, 241, 255, 0.69)',
  /** Borde claro sobre fondo oscuro (footer). Decorativo. */
  bordeClaro: 'rgba(255, 255, 255, 0.2)',
}

// ---------------------------------------------------------------------------
// Tipografía
// ---------------------------------------------------------------------------

export const FUENTES = {
  /** Roboto: texto corrido y titulares. */
  texto: "'Roboto', system-ui, sans-serif",
  /** Roboto Slab: tipografía secundaria con serifa. */
  destacada: "'Roboto Slab', Georgia, serif",
}

export const PESOS = {
  normal: 400,
  medio: 500,
  semibold: 600,
  bold: 700,
}

/**
 * Escala tipográfica.
 * A partir de `xl` (24px) cuenta como "texto grande" para WCAG, que baja el
 * mínimo de contraste de 4.5:1 a 3:1.
 */
export const TAMANOS = {
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.25rem', // 20px
  xl: '1.5rem', // 24px
  xxl: '2rem', // 32px
  hero: '3rem', // 48px
}

// ---------------------------------------------------------------------------
// Medidas
// ---------------------------------------------------------------------------

export const ESPACIADO = {
  xs: '0.5rem', // 8px
  sm: '1rem', // 16px
  md: '1.5rem', // 24px
  lg: '2.5rem', // 40px
  xl: '4rem', // 64px
  xxl: '6rem', // 96px
}

export const RADIOS = {
  sm: '8px',
  md: '12px',
  lg: '20px',
  /** Botones tipo píldora. */
  pill: '999px',
}

export const SOMBRAS = {
  tarjeta: '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  elevada: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
}

/** Puntos de quiebre. Deben coincidir con los --bp-* de variables.css. */
export const BREAKPOINTS = {
  movil: '480px',
  tablet: '768px',
  escritorio: '1024px',
  ancho: '1280px',
}

/** Ancho máximo del contenido centrado (lectura cómoda). */
export const CONTENEDOR = '1280px'

/** Ancho máximo del hero y de las rejillas de tarjetas de la home. */
export const CONTENEDOR_ANCHO = '1440px'

/** Ancho máximo de un párrafo, para no pasar de ~75 caracteres por línea. */
export const ANCHO_LECTURA = '68ch'

/** Área táctil mínima de cualquier elemento interactivo (WCAG 2.1 AA). */
export const AREA_TACTIL_MIN = '44px'

/** Puntos indicadores del hero y de los carruseles. */
export const TAMANO_PUNTO = '10px'
export const TAMANO_PUNTO_ACTIVO = '28px'

// ---------------------------------------------------------------------------
// Textos reutilizados
// ---------------------------------------------------------------------------

export const TEXTOS = {
  ctaAdquirir: 'Adquirir',
  ctaMasInfo: 'Más información',
  ctaVerPlanes: 'Ver planes',
  ctaComoFunciona: '¿Cómo funciona?',
  ctaIniciarSesion: 'Iniciar sesión',
  /* El footer usa una etiqueta más descriptiva que el header para el mismo
     destino: en el header el contexto es evidente, en el pie no. */
  enlacePlataforma: 'Plataforma de alumnos',
  periodoMensual: 'x mes',
  periodoSemestral: 'x 6 meses',
  saltarAlContenido: 'Ir al contenido',
}

/** Id del <main>, destino del enlace "Ir al contenido". */
export const ID_CONTENIDO = 'contenido'
