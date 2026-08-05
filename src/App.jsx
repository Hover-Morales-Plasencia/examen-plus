import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import ScrollAlNavegar from '@/components/ScrollAlNavegar'
import HomePage from '@/pages/HomePage'
import UniversidadPage from '@/pages/UniversidadPage'
import GradoPage from '@/pages/GradoPage'
import IdiomaPage from '@/pages/IdiomaPage'
import NotFoundPage from '@/pages/NotFoundPage'

/**
 * Rutas del sitio.
 *
 * Cada universidad, grado e idioma tiene su propia URL para que Google indexe
 * y posicione cada una por separado. Los slug de escolares e idiomas son los
 * del sitio anterior: ya están indexados y cambiarlos perdería posicionamiento.
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollAlNavegar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/universidades/:slug" element={<UniversidadPage />} />
          <Route path="/escolares/:slug" element={<GradoPage />} />
          <Route path="/idiomas/:slug" element={<IdiomaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
