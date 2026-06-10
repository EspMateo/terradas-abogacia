import '../styles/Services.css'

const IconPenal = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 9l9-6 9 6"/>
    <path d="M5 9v8a1 1 0 001 1h12a1 1 0 001-1V9"/>
    <path d="M9 22h6"/>
  </svg>
)

const IconFamilia = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="6" r="2.5"/>
    <circle cx="17" cy="8" r="2"/>
    <path d="M4 19c0-3.314 2.239-6 5-6s5 2.686 5 6"/>
    <path d="M14.5 19c0-2.485 1.567-4.5 3.5-4.5s3.5 2.015 3.5 4.5"/>
  </svg>
)

const IconFiscal = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18"/>
    <path d="M9 21V9"/>
    <path d="M8 6h.01M12 6h.01M16 6h.01"/>
  </svg>
)

const IconDetenidas = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6L12 2z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const IconLaboral = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    <path d="M12 12v4M10 14h4"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const services = [
  {
    Icon: IconPenal,
    title: 'Derecho Penal',
    description:
      'Defensa técnica en causas penales, asesoramiento desde la etapa investigativa hasta el juicio oral. Protección de sus derechos fundamentales ante el sistema penal.',
  },
  {
    Icon: IconFamilia,
    title: 'Derecho de Familia',
    description:
      'Divorcios, régimen de visitas, alimentos, tenencia y guarda de menores. Abordaje sensible y eficaz en situaciones que afectan al núcleo familiar.',
  },
  {
    Icon: IconFiscal,
    title: 'Derecho Fiscal y Tributario',
    description:
      'Asesoramiento en obligaciones tributarias, planificación fiscal, recursos ante la DGI y BPS. Defensa ante organismos recaudadores del Estado.',
  },
  {
    Icon: IconDetenidas,
    title: 'Defensa de Personas Detenidas',
    description:
      'Asistencia jurídica inmediata para personas privadas de libertad. Defensa en audiencias de formalización, medidas cautelares y recursos de apelación.',
  },
  {
    Icon: IconLaboral,
    title: 'Derecho Laboral',
    description:
      'Conflictos entre empleadores y trabajadores, despidos injustificados, cobro de beneficios laborales, accidentes de trabajo y negociaciones colectivas.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Áreas de práctica</span>
          <h2 className="section-title">
            Soluciones jurídicas<br /><span>especializadas</span>
          </h2>
          <div className="gold-line" />
          <p>
            Cada área requiere un enfoque específico. Ofrezco representación y asesoría en las materias más relevantes para individuos y empresas en Uruguay.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ Icon, title, description }) => (
            <div key={title} className="service-card">
              <div className="service-icon-wrap">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="service-card-footer">
                <span>Consultar</span>
                <ArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
