import { useEffect, useState } from 'react'
import { TEXTOS } from '@/config/siteConfig'
import { HERO_SLIDES, HERO_VENTAJAS } from '@/services/hero'
import Boton from './Boton'
import PuntosIndicador from './PuntosIndicador'
import './Hero.css'

/** Cada cuántos milisegundos avanza el carrusel del hero. */
const INTERVALO_MS = 5000

/**
 * Primera pantalla: titular, ventajas y carrusel de imágenes.
 *
 * El carrusel avanza solo, pero se detiene si el usuario pasa el ratón o pone
 * el foco encima; y no arranca si el sistema pide menos animación.
 */
function Hero() {
  const [slide, setSlide] = useState(0)
  const [enPausa, setEnPausa] = useState(false)

  useEffect(() => {
    if (enPausa) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const temporizador = setInterval(() => {
      setSlide((actual) => (actual + 1) % HERO_SLIDES.length)
    }, INTERVALO_MS)

    return () => clearInterval(temporizador)
  }, [enPausa])

  return (
    <section className="hero" aria-labelledby="hero-titulo">
      <div className="hero__contenedor">
        <div className="hero__texto">
          <h1 id="hero-titulo" className="hero__titulo">
            Domina tus <span className="hero__resalte">exámenes</span> y sé el{' '}
            <span className="hero__resalte">mejor</span> alumno.
          </h1>

          <p className="hero__subtitulo">
            ¡La plataforma más completa para tu preparación académica!
          </p>

          <ul className="hero__ventajas">
            {HERO_VENTAJAS.map((ventaja) => (
              <li key={ventaja.texto} className="hero__ventaja">
                <img src={ventaja.icono} alt="" width={24} height={24} aria-hidden="true" />
                {ventaja.texto}
              </li>
            ))}
          </ul>

          <div className="hero__acciones">
            <Boton href="#planes" tamano="lg">
              {TEXTOS.ctaVerPlanes}
            </Boton>
            <Boton href="#objetivos" variante="secundario" tamano="lg">
              {TEXTOS.ctaComoFunciona}
            </Boton>
          </div>
        </div>

        <div
          className="hero__galeria"
          onMouseEnter={() => setEnPausa(true)}
          onMouseLeave={() => setEnPausa(false)}
          onFocus={() => setEnPausa(true)}
          onBlur={() => setEnPausa(false)}
        >
          <div className="hero__imagenes">
            {HERO_SLIDES.map((item, indice) => (
              <img
                key={item.slug}
                src={item.imagen}
                alt={item.alt}
                width={1027}
                height={592}
                className={`hero__imagen ${indice === slide ? 'hero__imagen--activa' : ''}`}
                /* La primera imagen es lo primero que se ve: cargarla cuanto antes
                   mejora el tiempo de pintado. Las demás pueden esperar. */
                loading={indice === 0 ? 'eager' : 'lazy'}
                fetchPriority={indice === 0 ? 'high' : 'auto'}
              />
            ))}
          </div>

          <PuntosIndicador
            total={HERO_SLIDES.length}
            actual={slide}
            onIr={setSlide}
            etiqueta={(indice) =>
              `Ver imagen ${indice + 1} de ${HERO_SLIDES.length}: ${HERO_SLIDES[indice].titulo}`
            }
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
