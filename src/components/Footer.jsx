import {
  SITIO,
  CONTACTO,
  NAVEGACION,
  ENLACES_EXTERNOS,
  TEXTOS,
  urlWhatsApp,
  redesActivas,
} from '@/config/siteConfig'
// El logo normal es gris oscuro y desaparece sobre el fondo del footer:
// esta es la versión para fondos oscuros, con la misma silueta en blanco.
import logo from '@/assets/images/logo-vertical-blanco.webp'
import './Footer.css'

/*
 * Footer compacto, en tres bloques lógicos: marca, navegación y contacto.
 *
 * Antes listaba también las 10 universidades, pero eso duplicaba contenido que
 * ya está en la home y hacía que en móvil el pie ocupara casi una pantalla
 * entera. Las guías de UX consultadas coinciden: dos o tres secciones
 * conectadas lógicamente, sin saturar y sin repetir lo que ya existe arriba.
 */

function Footer() {
  const anio = new Date().getFullYear()
  const redes = redesActivas()

  return (
    <footer className="footer">
      <div className="footer__contenedor">
        <div className="footer__marca">
          <img src={logo} alt={SITIO.nombre} width={64} height={64} />
          <p className="footer__lema">{SITIO.lema}</p>
        </div>

        <nav className="footer__bloque" aria-label="Secciones del sitio">
          <h2 className="footer__titulo">Secciones</h2>
          <ul className="footer__lista">
            {NAVEGACION.map((enlace) => (
              <li key={enlace.href}>
                <a href={enlace.href} className="footer__enlace">
                  {enlace.etiqueta}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__bloque">
          <h2 className="footer__titulo">Contacto</h2>
          <ul className="footer__lista">
            <li>
              <a
                className="footer__enlace"
                href={urlWhatsApp(`Hola, quiero información sobre ${SITIO.nombre}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a className="footer__enlace" href={`mailto:${CONTACTO.email}`}>
                {CONTACTO.email}
              </a>
            </li>
            <li>
              <a
                className="footer__enlace"
                href={ENLACES_EXTERNOS.plataformaAlumnos}
                target="_blank"
                rel="noopener noreferrer"
              >
                {TEXTOS.enlacePlataforma}
              </a>
            </li>
            {redes.map(([nombre, url]) => (
              <li key={nombre}>
                <a
                  className="footer__enlace footer__enlace--red"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__legal">
        <p>
          © {anio} {SITIO.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
