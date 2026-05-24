import { useState } from 'react'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: 'location_on', title: 'Our Address',
    lines: ['Vraj Namkeen', 'Suraj Farm, At. Chikhodra-388 320', 'Ta. & Dist. Anand, Gujarat (INDIA)'],
    bgClass: 'contact-info__icon--yellow',
  },
  {
    icon: 'call', title: 'Call Us',
    lines: ['+91 98790 25922', '+91 94280 76690', 'Mon-Sat, 9:00 AM - 6:00 PM'],
    bgClass: 'contact-info__icon--green',
  },
  {
    icon: 'mail', title: 'Email Us',
    lines: ['hariomnamkeen22@gmail.com'],
    bgClass: 'contact-info__icon--pink',
  },
]

export default function Contact() {
  return (
    <div className="contact-page">

      {/* ===== HERO ===== */}
      <header className="contact-hero">
        <div className="contact-hero__bg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxR554H_bWcTNQqVcQV6FP0F7m7AUSSK7fx-w-oP_5urwUAHl8iXLYoHc_pPLkYmrMopQxWFJjsVbcoMs83U9jkePiiFR3aXn8J8GY-Iu6RF5aH-5Xa3pNg0TPk-duP2vbIStVE41KAF47pf9OVCB-GSXxK9ZVGAimdn5NocjfaFDnDZfFASjuX9qIxVGgqNH6uO9wEI4Eq5a_FcV5u1gg5goaEKUCJFGvgTY2B6LCGmboW9Stx_mL2RQKw7OwDGc03Pcb0nQel7M"
            alt="Contact background" className="contact-hero__bg-img"
          />
          <div className="contact-hero__bg-gradient" />
        </div>
        <div className="container contact-hero__content">
          <div className="contact-hero__text">
            <span className="contact-hero__tag">Let's Connect</span>
            <h1 className="contact-hero__title">Get in Touch with Tradition</h1>
            <p className="contact-hero__sub">
              Whether you're a snack enthusiast, a potential distributor, or a partner looking to collaborate, we'd love to hear from you.
            </p>
          </div>
        </div>
      </header>

      {/* ===== MAIN GRID: Map + Contact Info ===== */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Map Card */}
            <div className="contact-map-card">
              <div className="contact-map-card__header">
                <h2 className="contact-map-card__title">Our Location</h2>
                <p className="contact-map-card__sub">Visit our manufacturing unit & office in Anand, Gujarat.</p>
              </div>
              <div className="contact-map-card__img-wrap">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhsrcQZF_R7uoMkbI2vYy5ArFkbQ9RcYaH03ai9BbK6RDIUKtg1MaIil0JukCRpE6KfgqcOVcJ6rIwFdoY3qglsS4RjAOJcekU8R82U-OKwBl3PpHOGNXg7Cz24aCnTs_dj52z84ZH-JNK4afNeA3StgAD2Zi3dwtHMkSoC4vAj8Fg9cyq0B4q2gPgHg-UwazhyvOHi1xWXWpK1E9mpgPCBh91w0U1GlRfSLJllYESL5gKG6JRTa_tJMc8DGkgG5JUJ3lH8CuTsv4"
                  alt="Location map"
                  className="contact-map-card__img"
                />
                <div className="contact-map-card__overlay">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-map-card__btn"
                  >
                    <span className="material-symbols-outlined">directions</span>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Info */}
            <div className="contact-info-list">
              {CONTACT_INFO.map(({ icon, title, lines, bgClass }) => (
                <div key={title} className="contact-info-item">
                  <div className={`contact-info__icon-wrap ${bgClass}`}>
                    <span className="material-symbols-outlined fill">{icon}</span>
                  </div>
                  <div>
                    <h3 className="contact-info__title">{title}</h3>
                    {lines.map((line, i) => (
                      <p key={i} className="contact-info__line">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
