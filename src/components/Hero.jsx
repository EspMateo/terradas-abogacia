import { useEffect, useState } from 'react'
import '../styles/Hero.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="inicio" className="hero">
      <div className={`hero-bg ${loaded ? 'loaded' : ''}`} />
      <div className="hero-overlay" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Estudio Jurídico · Uruguay</span>
          </div>

          <h1 className="hero-title">
            Lucía <em>Terradas</em><br />
            Abogada
          </h1>

          <p className="hero-subtitle">
            Asesoramiento jurídico profesional y defensa de sus derechos.
            Atención personalizada, compromiso real y resultados concretos.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/59898358054"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.547 4.147 1.59 5.944L.057 23.882a.5.5 0 00.61.637l6.012-1.527A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.032-1.376l-.36-.214-3.732.949.981-3.647-.234-.373A9.867 9.867 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
              </svg>
              Contactar por WhatsApp
            </a>

            <a href="#consulta" className="btn-secondary">
              Agendar consulta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
