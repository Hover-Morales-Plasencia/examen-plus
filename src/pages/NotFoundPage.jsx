import { useMetaPagina } from '@/hooks/useMetaPagina'
import Boton from '@/components/Boton'
import './NotFoundPage.css'

/** Página para rutas que no existen. */
function NotFoundPage() {
  useMetaPagina('Página no encontrada')

  return (
    <div className="no-encontrada">
      <h1 className="no-encontrada__titulo">Página no encontrada</h1>
      <p className="no-encontrada__texto">La página que buscas no existe o cambió de dirección.</p>
      <Boton para="/" tamano="lg">
        Volver al inicio
      </Boton>
    </div>
  )
}

export default NotFoundPage
