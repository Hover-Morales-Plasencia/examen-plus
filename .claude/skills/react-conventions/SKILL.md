---
name: react-conventions
description: Convenciones de React del proyecto Examen Plus. Úsala al crear o modificar cualquier componente, página, hook o estilo dentro de src/. Define cómo se escriben los componentes, dónde viven los valores de marca y cómo se importan los assets.
---

# Convenciones de React — Examen Plus

Reglas obligatorias para todo el código dentro de `src/`.

## 1. Componentes funcionales con hooks

Solo componentes funcionales. Nada de clases.

```jsx
// ✅
function PlanCard({ titulo, precio }) {
  const [abierto, setAbierto] = useState(false)
  return <article>...</article>
}

// ❌
class PlanCard extends React.Component { ... }
```

Los hooks se llaman siempre en el nivel superior del componente: nunca dentro de
condicionales, bucles ni funciones anidadas.

## 2. Un componente por archivo, en PascalCase

El nombre del archivo es el nombre del componente.

```
src/components/PlanCard.jsx      -> export default function PlanCard()
src/components/Header.jsx        -> export default function Header()
src/pages/UniversidadPage.jsx    -> export default function UniversidadPage()
```

- Archivo y componente en **PascalCase**: `PlanCard.jsx`, no `plan-card.jsx`.
- **Un solo componente exportado por archivo.** Si necesitas un subcomponente
  reutilizable, sácalo a su propio archivo.
- Hooks en `src/hooks/` con prefijo `use` y **camelCase**: `useStickyHeader.js`.
- Servicios y config en **camelCase**: `siteConfig.js`, `universidades.js`.

## 3. Props desestructuradas en la firma

```jsx
// ✅
function UniversidadCard({ sigla, nombre, escudo, beneficios, onAdquirir }) {
  return <article>...</article>
}

// ❌
function UniversidadCard(props) {
  return <article>{props.sigla}</article>
}
```

Valores por defecto en la propia desestructuración, no con `defaultProps`:

```jsx
function Boton({ variante = 'primario', tipo = 'button', children }) { ... }
```

Cuando un componente recibe muchas props relacionadas, pasa el objeto entero:

```jsx
// ✅ el objeto viene de src/services/universidades.js
<UniversidadCard universidad={universidad} />
```

## 4. Nunca colores ni textos hardcodeados

Todo valor de marca sale de `src/config/siteConfig.js`. **Cero excepciones.**

```jsx
// ❌ nunca
<div style={{ color: '#6464FF' }}>
.boton { background: #6464FF; }

// ✅ en JSX, vía clases CSS
<button className="boton boton--primario">

// ✅ en CSS, vía variables
.boton--primario { background: var(--color-primary); }
```

Las variables CSS se generan desde `siteConfig.js` en `src/styles/`. Si necesitas
un color que no existe ahí, **añádelo primero a `siteConfig.js`** y luego úsalo.

Lo mismo aplica a datos de contacto, nombre del sitio, URLs y precios: viven en
`siteConfig.js` o en `src/services/`, nunca escritos a mano dentro de un componente.

## 5. Nada de estilos inline

```jsx
// ❌
<div style={{ padding: '20px', background: '#fff' }}>

// ✅
<div className="tarjeta">
```

ESLint avisa de esto con `react/forbid-dom-props`.

**Única excepción permitida:** un valor calculado en tiempo de ejecución que no se
puede expresar en CSS estático (por ejemplo el `transform` de un carrusel según el
índice). En ese caso, deja un comentario explicando por qué.

## 6. Assets siempre importados desde `src/assets/`

```jsx
// ✅
import logo from '@/assets/images/logo-horizontal.webp'
import iconoUniversidad from '@/assets/icons/universidad.svg'

<img src={logo} alt="Examen Plus" width={240} height={101} />

// ❌ rutas absolutas escritas a mano
<img src="/src/assets/images/logo-horizontal.webp" />
<img src="https://examenplus.com/wp-content/uploads/..." />
```

Importar deja que Vite optimice, versione y detecte rutas rotas en el build.

Usa el alias `@` (apunta a `src/`) en vez de rutas relativas largas:

```jsx
import Header from '@/components/Header' // ✅
import Header from '../../components/Header' // ❌
```

Toda `<img>` lleva `alt`. Si es decorativa, `alt=""`. Incluye `width` y `height`
para evitar que la página salte mientras carga.

## 7. Separar datos de presentación

Los componentes pintan; no contienen los datos.

```jsx
// ❌ datos incrustados en el componente
function Universidades() {
  const unis = [{ sigla: 'UNI', nombre: 'Universidad Nacional de Ingeniería' }, ...]
}

// ✅ los datos viven en src/services/
import { UNIVERSIDADES } from '@/services/universidades'

function Universidades() {
  return UNIVERSIDADES.map((u) => <UniversidadCard key={u.slug} universidad={u} />)
}
```

Igual con la lógica reutilizable: va a `src/hooks/`, no repetida en cada componente.

## 8. Accesibilidad desde el primer momento

- Un solo `<h1>` por página; los niveles bajan sin saltarse (`h1 → h2 → h3`).
- HTML semántico: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>`.
- Lo que navega es `<a>`; lo que ejecuta una acción es `<button>`. Nunca un `<div onClick>`.
- Todo input tiene su `<label>` asociado.
- Enlaces con `target="_blank"` llevan `rel="noopener noreferrer"`.

## 9. Idioma

- **Código en español**: nombres de variables, funciones, props y comentarios.
- **API de React en inglés**, como es natural: `useState`, `onClick`, `className`.
- Los comentarios explican **por qué**, no **qué**.

```jsx
// ✅
const [indiceSlide, setIndiceSlide] = useState(0)
function manejarSiguiente() { ... }
```

## 10. Después de crear o modificar un componente

Pasa el cambio por los tres subagentes de revisión antes de darlo por terminado:

1. `component-reviewer`
2. `a11y-checker`
3. `css-consistency`

Ver `CLAUDE.md` para el flujo completo.
