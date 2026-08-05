# CLAUDE.md — Examen Plus

Guía para trabajar en este proyecto. Léela antes de tocar código.

---

## Qué es el proyecto

**Examen Plus** es un sitio de venta de preparación académica en Perú. Vende
suscripciones a tres líneas de producto:

| Línea                        | Qué ofrece                                              | Precio              |
| ---------------------------- | ------------------------------------------------------- | ------------------- |
| **Simulacros Universidades** | Simulacros tipo admisión para 10 universidades peruanas | S/30 mes · S/175 6m |
| **Rendimiento Escolar**      | Refuerzo por grados, de 1° a 5° de secundaria           | S/40 mes · S/230 6m |
| **Exámenes de Idiomas**      | TOEFL, IELTS, Cambridge, DELF/DALF y otros idiomas      | S/55 mes · S/310 6m |

Universidades cubiertas: UNI, UNC, UNSA, UNT, UNMSM, UP, UPCH, PUCP, UPAO, UPN.

**Público:** estudiantes de secundaria y sus padres. **Mayoría en celular** — el
diseño responsive y el rendimiento no son opcionales.

**Origen:** migración de un sitio WordPress + Elementor (`examenplus.com`) a React.
El diseño y los assets se conservan.

**Plataforma de alumnos:** `alumnos.examenplus.com` es un **Moodle externo**. El
botón "Iniciar sesión" solo enlaza allí; no se migra ni se integra.

---

## Stack

- **React 19** + **Vite 8** — JavaScript, sin TypeScript
- **React Router 7** — rutas individuales por universidad, grado e idioma (SEO)
- **CSS plano** con variables — sin Tailwind ni CSS-in-JS
- **ESLint 9 + Prettier** — Husky y lint-staged bloquean commits que no pasen
- Fuentes **Roboto** y **Roboto Slab** alojadas en el propio proyecto

**Sin backend.** Todo es estático. Si una tarea requiere servidor o base de datos,
**avísale al usuario antes de implementarlo** — no ha trabajado backend y quiere
decidirlo explícitamente.

---

## Estructura de carpetas

```
Examen-Plus/
├── .claude/
│   ├── agents/            los 3 revisores (solo lectura)
│   └── skills/            convenciones del proyecto
├── archivos-existentes/   sitio WordPress original (referencia, fuera de git)
├── public/                favicon
└── src/
    ├── components/        componentes reutilizables
    ├── pages/             vistas completas (una por ruta)
    ├── hooks/             custom hooks
    ├── services/          datos y lógica de negocio
    ├── config/            siteConfig.js — colores, textos, contacto
    ├── assets/
    │   ├── images/        hero/ escolares/ idiomas/ universidades/
    │   ├── icons/         6 SVG
    │   └── fonts/         Roboto y Roboto Slab (woff2 variables)
    └── styles/            estilos globales y variables CSS
```

Importa con el alias `@` (apunta a `src/`):

```jsx
import Header from '@/components/Header' // ✅
import Header from '../../components/Header' // ❌
```

---

## Comandos

| Comando                | Qué hace                                |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                  |
| `npm run build`        | Build de producción en `dist/`          |
| `npm run preview`      | Previsualiza el build                   |
| `npm run lint`         | Revisa el código con ESLint             |
| `npm run lint:fix`     | Corrige lo que se puede automáticamente |
| `npm run format`       | Formatea todo con Prettier              |
| `npm run format:check` | Verifica el formato sin modificar nada  |

---

## 🔴 Revisión obligatoria de componentes

**Después de crear o modificar cualquier componente, hay que pasar el cambio por los
tres subagentes de revisión antes de considerar la tarea terminada.** No es opcional
y no depende de si el cambio "parece pequeño".

### Los tres revisores

| Subagente              | Qué revisa                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| **component-reviewer** | Tamaño, props, re-renders innecesarios, lógica de negocio mezclada con presentación, estilos inline |
| **a11y-checker**       | Contraste, navegación por teclado, ARIA, jerarquía de headings, labels, textos alternativos         |
| **css-consistency**    | Que los estilos usen las variables de `siteConfig.js` y no valores hardcodeados                     |

Los tres son de **solo lectura**: revisan y reportan, nunca modifican archivos.
Lánzalos **en paralelo**, en un solo mensaje, ya que son independientes entre sí.

### Flujo de trabajo

1. Crear o modificar el componente.
2. Ejecutar los tres subagentes sobre ese cambio.
3. **Mostrarle al usuario los resultados de los tres.**
4. Aplicar **solo** las correcciones que el usuario apruebe.
5. **Mostrar `git diff` antes de commitear. Nunca commitear automáticamente.**

El punto 5 es una regla firme: el usuario decide siempre qué se commitea, después
de ver qué cambió.

---

## Convenciones de código

El detalle completo está en `.claude/skills/react-conventions/SKILL.md`. Resumen:

- Componentes funcionales con hooks. Nada de clases.
- **Un componente por archivo**, en PascalCase: `PlanCard.jsx`.
- **Props desestructuradas** en la firma, con valores por defecto ahí mismo.
- **Cero colores hardcodeados.** Todo sale de `src/config/siteConfig.js`.
- **Cero estilos inline.** Solo se admiten valores calculados en runtime, con
  comentario que lo justifique.
- **Assets importados** desde `src/assets/`, nunca por ruta escrita a mano.
- **Datos en `src/services/`**, no incrustados en los componentes.
- Código en español; la API de React queda en inglés (`useState`, `onClick`).
- Un solo `<h1>` por página, sin saltos de nivel en los headings.

---

## Decisiones ya tomadas

**Rutas (SEO).** Cada universidad, grado e idioma tiene su página propia. Los slugs
de escolares e idiomas **se mantienen igual que en el sitio actual** porque ya están
indexados en Google; cambiarlos perdería posicionamiento. Los de universidades son
nuevos y cortos.

```
/                                        Home
/universidades/uni · unc · unsa · unt · unmsm · up · upch · pucp · upao · upn
/escolares/primer-ano-de-secundaria … quinto-ano-de-secundaria
/idiomas/ingles · frances · otros-idiomas
```

**Botón "Adquirir": pendiente.** El destino final no está decidido. Vender en línea
exigiría pasarela de pago, que **es backend**. Por ahora apunta al WhatsApp de
`siteConfig.js`, marcado con `// PENDIENTE`. El diseñador ya lo dibujó con icono de
WhatsApp, así que es coherente.

**Datos de contacto: placeholders.** Todavía no hay WhatsApp ni email definitivos.
Están en `siteConfig.js` marcados con `// TODO`. Cuando existan, se cambian **ahí y
en un solo lugar**.

**Nada de base de datos por ahora.** `siteConfig.js` cumple la función de fuente
única de verdad sin necesidad de servidor.

---

## Contexto sobre el usuario

Es autodidacta y **no ha trabajado backend**. Por eso:

- Explícale todo **en español**.
- Si algo requiere backend, **dilo explícitamente antes de implementarlo**.
- Avanza **paso a paso**, esperando confirmación entre etapas grandes.
- Si detectas malas prácticas en el código legacy, **avísale — no las arregles por
  tu cuenta sin consultar**.
- Prioriza buenas prácticas por encima de atajos, y explica **el porqué** de cada
  decisión técnica.

---

## Problemas conocidos del sitio legacy

Detectados en el análisis. **No arreglar sin avisar**, pero no arrastrarlos a React:

- ~25 `<h1>` por página y jerarquía invertida (`h6 → h3 → h1`).
- Imágenes sin `alt`.
- `lang="en"` en el HTML de un sitio en español.
- Menú con contenido de relleno ("Item #1/2/3"). En React son las anclas reales.
- Footer vacío: sin contacto, redes ni avisos legales.
- Imágenes sin optimizar (14 MB en PNG → ya convertidas a WebP, 81% menos).
- Frontis de universidades en baja resolución (~760px). **UNI, UNC, UNT, UP, PUCP y
  UPN** convendría reemplazarlas por versiones de 1600×900.
- ~64 widgets "spacer" haciendo el espaciado a mano.
