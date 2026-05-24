import { useState } from 'react'
import poster1 from '../../assets/banners/poster-1.png'
import poster4 from '../../assets/banners/poster-4.png'
import './Distribution.css'

const BENEFITS = [
  { icon: 'trending_up', title: 'High Margins', desc: 'Enjoy highly competitive profit margins designed to ensure a quick ROI and sustained business growth.', color: 'var(--primary)' },
  { icon: 'hub', title: 'Wide Network', desc: 'Tap into an established distribution network with optimized supply chain logistics for timely deliveries.', color: 'var(--secondary)' },
  { icon: 'campaign', title: 'Marketing Support', desc: 'Receive robust promotional materials, point-of-sale displays, and regional marketing campaign assistance.', color: 'var(--tertiary)' },
  { icon: 'verified', title: 'Quality Assurance', desc: 'Consistent, premium quality products manufactured under strict hygiene and traditional taste standards.', color: 'var(--primary)' },
]

const STEPS = [
  { num: 1, title: 'Fill Inquiry', desc: 'Submit your basic details through our online application form below.', icon: 'edit_document', iconBg: 'var(--primary)' },
  { num: 2, title: 'Documentation', desc: 'Our team will contact you to verify details and complete necessary agreements.', icon: 'folder_open', iconBg: 'var(--secondary)' },
  { num: 3, title: 'Onboarding', desc: 'Receive your initial stock, marketing kit, and commence distribution.', icon: 'rocket_launch', iconBg: 'var(--tertiary)' },
]

const STATES = ['Gujarat', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Karnataka', 'Tamil Nadu', 'Uttar Pradesh', 'Delhi NCR', 'Other']
const EXPERIENCES = ['New to Distribution', '1 - 3 Years', '3 - 5 Years', '5+ Years']

export default function Distribution() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', city: '', state: '', experience: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="distribution-page">

      {/* ===== HERO ===== */}
      <section className="dist-hero">
        <div className="dist-hero__radial" />
        <div className="dist-hero__blob dist-hero__blob--1" />
        <div className="dist-hero__blob dist-hero__blob--2" />
        <div className="container dist-hero__inner">
          <div className="dist-hero__text">
            <span className="dist-hero__tag">
              <span className="material-symbols-outlined dist-hero__tag-icon">handshake</span>
              Partnership Opportunity
            </span>
            <h1 className="dist-hero__title">Grow Your Business with Vraj Namkeen</h1>
            <p className="dist-hero__sub">Join our rapidly expanding network of successful distributors. Deliver premium quality, authentic traditional taste, and enjoy lucrative margins in the booming snacks market.</p>
            <div className="dist-hero__btns">
              <a href="#application-form" className="dist-hero__btn dist-hero__btn--primary">
                Apply Now <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#benefits" className="dist-hero__btn dist-hero__btn--ghost">View Benefits</a>
            </div>
          </div>
          <div className="dist-hero__visual">
            <div className="dist-hero__img-wrap">
              <img src={poster4} alt="Vraj Namkeen Products" className="dist-hero__img" />
              <div className="dist-hero__img-overlay">
                <div className="dist-hero__img-badge">
                  <span className="dist-hero__img-badge-text">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY PARTNER ===== */}
      <section className="dist-benefits section" id="benefits">
        <div className="container">
          <div className="dist-benefits__header">
            <h2 className="dist-benefits__title">Why Partner With Us?</h2>
            <p className="dist-benefits__sub">We provide a solid foundation for your business growth with comprehensive support and a proven product lineup.</p>
          </div>
          <div className="dist-benefits__grid">
            {BENEFITS.map(({ icon, title, desc, color }) => (
              <div key={title} className="dist-benefit-card">
                <div className="dist-benefit-card__icon-wrap" style={{ color }}>
                  <span className="material-symbols-outlined fill dist-benefit-card__icon">{icon}</span>
                </div>
                <h3 className="dist-benefit-card__title">{title}</h3>
                <p className="dist-benefit-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS STEPS ===== */}
      <section className="dist-process section">
        <div className="dist-process__skew" />
        <div className="container dist-process__inner">
          <div className="dist-process__header">
            <h2 className="dist-process__title">Join Our Network in 3 Simple Steps</h2>
            <p className="dist-process__sub">A streamlined onboarding process designed to get your distribution business running quickly.</p>
          </div>
          <div className="dist-steps">
            <div className="dist-steps__line" />
            {STEPS.map(({ num, title, desc, icon, iconBg }) => (
              <div key={num} className="dist-step">
                <div className="dist-step__circle">
                  <span className="dist-step__num">{num}</span>
                  <div className="dist-step__mini-icon" style={{ background: iconBg }}>
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                </div>
                <h3 className="dist-step__title">{title}</h3>
                <p className="dist-step__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section className="dist-form-section section" id="application-form">
        <div className="container">
          <div className="dist-form-layout">
            {/* Form */}
            <div className="dist-form-card">
              <div className="dist-form-card__accent" />
              {submitted ? (
                <div className="dist-form-success">
                  <div className="dist-form-success__icon-wrap"><span className="material-symbols-outlined fill">check_circle</span></div>
                  <h3 className="dist-form-success__title">Application Submitted!</h3>
                  <p className="dist-form-success__desc">Thank you! Our partnership team will reach out within 24 hours.</p>
                  <button className="dist-form-success__btn" onClick={() => { setSubmitted(false); setFormData({ fullName: '', phone: '', email: '', city: '', state: '', experience: '', message: '' }) }}>Submit Another</button>
                </div>
              ) : (
                <>
                  <div className="dist-form-card__header">
                    <h2 className="dist-form-card__title">Start Your Journey</h2>
                    <p className="dist-form-card__sub">Fill out the form below, and our partnership team will get back to you within 24 hours.</p>
                  </div>
                  <form className="dist-form" onSubmit={handleSubmit}>
                    <div className="dist-form__row">
                      <div className="dist-form__group">
                        <label className="dist-form__label" htmlFor="dist-name">Full Name <span className="dist-form__req">*</span></label>
                        <input className="dist-form__input" id="dist-name" name="fullName" type="text" placeholder="e.g. John Doe" value={formData.fullName} onChange={handleChange} required />
                      </div>
                      <div className="dist-form__group">
                        <label className="dist-form__label" htmlFor="dist-phone">Phone Number <span className="dist-form__req">*</span></label>
                        <input className="dist-form__input" id="dist-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="dist-form__row">
                      <div className="dist-form__group">
                        <label className="dist-form__label" htmlFor="dist-email">Email Address</label>
                        <input className="dist-form__input" id="dist-email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                      </div>
                      <div className="dist-form__group">
                        <label className="dist-form__label" htmlFor="dist-city">City of Interest <span className="dist-form__req">*</span></label>
                        <input className="dist-form__input" id="dist-city" name="city" type="text" placeholder="e.g. Mumbai" value={formData.city} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="dist-form__group">
                      <label className="dist-form__label" htmlFor="dist-experience">Distribution Experience</label>
                      <select className="dist-form__input dist-form__select" id="dist-experience" name="experience" value={formData.experience} onChange={handleChange}>
                        <option value="">Select your experience level</option>
                        {EXPERIENCES.map(e => <option key={e} value={e}>{e}</option>)}
                      </select>
                    </div>
                    <div className="dist-form__group">
                      <label className="dist-form__label" htmlFor="dist-message">Additional Information</label>
                      <textarea className="dist-form__input dist-form__textarea" id="dist-message" name="message" rows={4} placeholder="Tell us briefly about your current operations or infrastructure..." value={formData.message} onChange={handleChange} />
                    </div>
                    <button className="dist-form__submit" type="submit">
                      Submit Application <span className="material-symbols-outlined">send</span>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="dist-form-sidebar">
              <div className="dist-sidebar-img-wrap">
                <img src={poster1} alt="Authentic Snacks" className="dist-sidebar-img" />
                <div className="dist-sidebar-img__overlay" />
                <div className="dist-sidebar-img__text">
                  <h3>Authentic Taste</h3>
                  <p>Loved by generations, perfect for your market.</p>
                </div>
              </div>
              <div className="dist-sidebar-help">
                <div className="dist-sidebar-help__icon-wrap">
                  <span className="material-symbols-outlined fill">support_agent</span>
                </div>
                <div>
                  <h4 className="dist-sidebar-help__title">Need help applying?</h4>
                  <p className="dist-sidebar-help__desc">Our dedicated partnership team is ready to answer your questions.</p>
                  <a href="tel:+919876543210" className="dist-sidebar-help__phone">
                    <span className="material-symbols-outlined">call</span> +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
