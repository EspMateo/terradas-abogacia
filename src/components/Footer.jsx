import '../styles/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#inicio" className="footer-logo">
            <img src="/assets/logo-negro.png" alt="Lucia Terradas Abogada" />
          </a>

          <ul className="footer-links">
            <li><a href="#sobre-nosotros">Sobre mí</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#consulta">Consulta</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

          <div className="footer-social">
            <a
              href="https://wa.me/59898358054"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              📱
            </a>
            <a
              href="https://instagram.com/terradasabogacia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="mailto:contacto@terradasabogacia.com"
              aria-label="Email"
            >
              ✉️
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} <span>Terradas Abogacía</span> · Todos los derechos reservados
          </p>
          <p className="footer-disclaimer">
            La información en este sitio es de carácter informativo y no constituye asesoramiento legal. Cada caso requiere consulta profesional.
          </p>
        </div>
      </div>
    </footer>
  )
}
