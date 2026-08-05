import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITIO } from './src/config/siteConfig.js'

/**
 * Rellena los marcadores de index.html con los valores de siteConfig.js,
 * para que el título y la descripción no estén escritos en dos sitios.
 */
function datosDelSitio() {
  return {
    name: 'datos-del-sitio',
    transformIndexHtml(html) {
      return html
        .replace(/%IDIOMA%/g, SITIO.idioma)
        .replace(/%TITULO%/g, SITIO.titulo)
        .replace(/%DESCRIPCION%/g, SITIO.descripcion)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), datosDelSitio()],
  resolve: {
    // Permite importar con "@/components/Header" en vez de "../../components/Header".
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
