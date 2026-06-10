import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Appointment.css'

const clean = (s) => s?.replace(/^﻿/, '').trim()
const SERVICE_ID = clean(import.meta.env.VITE_EMAILJS_SERVICE_ID)
const TEMPLATE_ID = clean(import.meta.env.VITE_EMAILJS_TEMPLATE_ID)
const PUBLIC_KEY = clean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

const motivoOptions = [
  'Derecho Penal',
  'Derecho de Familia',
  'Derecho Fiscal y Tributario',
  'Defensa de Personas Detenidas',
  'Derecho Laboral',
  'Otro',
]

const horaOptions = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00',
]

export default function Appointment() {
  const [form, setForm] = useState({
    nombre: '', telefono: '', email: '', motivo: '', fecha: '', hora: '', comentario: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const templateParams = {
      name: form.nombre,
      nombre: form.nombre,
      telefono: form.telefono,
      email: form.email,
      motivo: form.motivo,
      fecha: form.fecha,
      hora: form.hora,
      comentario: form.comentario || '(Sin comentarios adicionales)',
    }

    console.log('EmailJS config:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY })
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setLoading(false)
        setSent(true)
      })
      .catch((err) => {
        setLoading(false)
        setError(typeof err === 'object' ? JSON.stringify(err) : String(err))
      })
  }

  return (
    <section id="consulta" className="appointment">
      <div className="container">
        <div className="appointment-inner">
          <div className="appointment-info">
            <span className="section-label">Agendar consulta</span>
            <h2 className="section-title">
              Reserve su<br /><span>consulta hoy</span>
            </h2>
            <div className="gold-line" />
            <p>
              El primer paso para resolver su situación legal es hablar. Complete el formulario y me pondré en contacto a la brevedad para confirmar el horario.
            </p>

            <div className="appointment-features">
              <div className="apt-feature">
                <div className="apt-feature-icon">🕐</div>
                <span>Respuesta en menos de 24 horas hábiles</span>
              </div>
              <div className="apt-feature">
                <div className="apt-feature-icon">🔐</div>
                <span>Absoluta confidencialidad garantizada</span>
              </div>
              <div className="apt-feature">
                <div className="apt-feature-icon">📍</div>
                <span>Consulta presencial o videollamada</span>
              </div>
              <div className="apt-feature">
                <div className="apt-feature-icon">💬</div>
                <span>También disponible por WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="appointment-form-wrap">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h4>¡Solicitud enviada!</h4>
                <p>
                  Solicitud enviada correctamente. Nos pondremos en contacto a la brevedad.
                </p>
              </div>
            ) : (
              <>
                <h3>Datos de contacto</h3>
                <p>Todos los campos son necesarios para coordinar su consulta.</p>
                {error && (
                  <p className="form-error">
                    Error: {error}
                  </p>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group full">
                      <label htmlFor="nombre">Nombre completo</label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Juan Pérez"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono</label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="+598 09X XXX XXX"
                        value={form.telefono}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Correo electrónico</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="correo@ejemplo.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group full">
                      <label htmlFor="motivo">Motivo de consulta</label>
                      <select
                        id="motivo"
                        name="motivo"
                        value={form.motivo}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Seleccione el área</option>
                        {motivoOptions.map(o => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="fecha">Fecha deseada</label>
                      <input
                        id="fecha"
                        name="fecha"
                        type="date"
                        value={form.fecha}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="hora">Hora deseada</label>
                      <select
                        id="hora"
                        name="hora"
                        value={form.hora}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Seleccione hora</option>
                        {horaOptions.map(h => (
                          <option key={h} value={h}>{h} hs</option>
                        ))}
                      </select>
                    </div>
                  </div>

                    <div className="form-group full">
                      <label htmlFor="comentario">Comentarios adicionales <span className="label-optional">(opcional)</span></label>
                      <textarea
                        id="comentario"
                        name="comentario"
                        placeholder="Describa brevemente su situación para poder orientarle mejor..."
                        value={form.comentario}
                        onChange={handleChange}
                        rows={3}
                      />
                    </div>

                  <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Solicitar Consulta'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
