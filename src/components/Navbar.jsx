import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Consulta', href: '#consulta' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <a href="#inicio" className="navbar-logo">
            <img src="/assets/logo-negro.png" alt="Lucia Terradas Abogada" />
          </a>

          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/59898358054"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            WhatsApp
          </a>

          <button
            className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {mobileOpen && (
          <nav className="navbar-mobile">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/59898358054"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-cta"
              onClick={closeMenu}
            >
              Contactar por WhatsApp
            </a>
          </nav>
        )}
      </div>
    </nav>
  )
}
