import '../styles/About.css'

const IconEtica = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 9l9-6 9 6"/>
    <path d="M5 9v8a1 1 0 001 1h12a1 1 0 001-1V9"/>
  </svg>
)

const IconEstrategia = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="12" y1="3" x2="12" y2="8"/>
    <line x1="12" y1="16" x2="12" y2="21"/>
    <line x1="3" y1="12" x2="8" y2="12"/>
    <line x1="16" y1="12" x2="21" y2="12"/>
  </svg>
)

const IconCercania = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

export default function About() {
  return (
    <section id="sobre-nosotros" className="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-image-wrap">
            <div className="about-corner-decor" />
            <div className="about-image-frame">
              <img src="/assets/lucia-standing.jpg" alt="Lucía Terradas Abogada" />
            </div>
          </div>

          <div className="about-text">
            <span className="section-label">Sobre mí</span>
            <h2 className="section-title">
              Comprometida con<br /><span>sus derechos</span>
            </h2>
            <div className="gold-line" />

            <p>
              Soy Lucía Terradas, abogada egresada de la Universidad de la República Oriental del Uruguay. Mi enfoque está en brindar un servicio jurídico cercano, claro y efectivo, acompañando a cada cliente desde el primer contacto hasta la resolución de su caso.
            </p>
            <p>
              Creo que el acceso a una buena asesoría legal no debería ser un privilegio. Por eso trabajo con transparencia, dedicación y un profundo compromiso con los resultados de quienes confían en mí.
            </p>
            <p>
              Cada caso es tratado con la atención que merece: escucho, analizo y actúo con estrategia para defender sus intereses de la manera más eficiente posible.
            </p>

            <div className="about-pillars">
              <div className="pillar">
                <div className="pillar-icon"><IconEtica /></div>
                <h4>Ética</h4>
                <p>Transparencia y honestidad en cada etapa del proceso.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon"><IconEstrategia /></div>
                <h4>Estrategia</h4>
                <p>Soluciones jurídicas pensadas para cada caso específico.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon"><IconCercania /></div>
                <h4>Cercanía</h4>
                <p>Atención personalizada y comunicación directa siempre.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
