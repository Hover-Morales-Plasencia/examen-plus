# Examen Plus

Sitio web de **Examen Plus**: preparación para exámenes de admisión universitaria,
refuerzo de rendimiento escolar y certificaciones de idiomas.

Migración del sitio original (WordPress + Elementor) a React + Vite.

## Stack

- **React 19** + **Vite 8** (JavaScript)
- **React Router 7** para las rutas
- **ESLint + Prettier** con Husky y lint-staged

## Empezar

```bash
npm install
npm run dev
```

## Comandos

| Comando                | Descripción                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                  |
| `npm run build`        | Build de producción en `dist/`          |
| `npm run preview`      | Previsualiza el build de producción     |
| `npm run lint`         | Revisa el código con ESLint             |
| `npm run lint:fix`     | Corrige automáticamente lo que se pueda |
| `npm run format`       | Formatea todo con Prettier              |
| `npm run format:check` | Verifica el formato sin modificar nada  |

## Estructura

```
src/
├── components/   componentes reutilizables
├── pages/        vistas completas
├── hooks/        custom hooks
├── services/     datos y lógica de negocio
├── config/       valores centralizados (colores, textos, contacto)
├── assets/       imágenes, iconos y fuentes
└── styles/       estilos globales
```

Las convenciones de código están documentadas en [`CLAUDE.md`](./CLAUDE.md).
