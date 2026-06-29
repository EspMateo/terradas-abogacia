import '../styles/Contact.css'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    <path d="M9 10c0 .6.4 1 1 1s1-.4 1-1V9a1 1 0 0 0-2 0v1z" fill="currentColor" stroke="none"/>
    <path d="M9.5 13.5s1 1.5 3 1.5 2.5-1 2.5-1"/>
    <circle cx="14" cy="10" r=".5" fill="currentColor" stroke="none"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
)

const contacts = [
  {
    icon: <WhatsAppIcon />,
    className: 'whatsapp',
    label: 'WhatsApp',
    value: '098 358 054',
    href: 'https://wa.me/59898358054',
  },
  {
    icon: <InstagramIcon />,
    className: 'instagram',
    label: 'Instagram',
    value: '@terradasabogacia',
    href: 'https://instagram.com/terradasabogacia',
  },
  {
    icon: <EmailIcon />,
    className: 'email',
    label: 'Correo electrónico',
    value: 'abogada.terradaslucia@gmail.com',
    href: 'mailto:abogada.terradaslucia@gmail.com',
  },
]

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-text">
            <span className="section-label">Contacto</span>
            <h2 className="section-title">
              Hablemos de<br /><span>su caso</span>
            </h2>
            <div className="gold-line" />
            <p>
              Estoy disponible para responder sus consultas y coordinar una reunión. No espere más para recibir el asesoramiento que necesita.
            </p>
          </div>

          <div className="contact-cards">
            {contacts.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className={`contact-card-icon ${c.className}`}>
                  {c.icon}
                </div>
                <div className="contact-card-text">
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </div>
                <span className="contact-card-arrow">
                  <ArrowRight />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
