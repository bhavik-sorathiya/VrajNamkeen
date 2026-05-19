import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const SLIDES = [
  {
    id: 1,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvxRYuBUw0FOSdKgixOxL8l9gxZmBZbYNib389fTGNwnbWhEa_ZGcjymw5A6K9eayOc3PmzFyzVuB-9WNtitu6Bzb_lkgqAac9xhd7G0ItB58rKls6TcxXxcEtLbtCtNZpTpGwtEQICSmLw8Esrt6bsibOZYoixXaE8Fzd2BIJaYnhRqHJ7gv0_GligbvXWB5wIm1uu-PHmhFTg5g6ObnGdIsWmcTRUPuPJchKfyFRdqJf0nxfAjExrjhG15RAfYMlU8eEb10Wji0',
    alt: 'The Best Travel Companions',
    tag: 'Premium Quality',
    headline: ['Har Dil Ki', 'Peheli Pasand'],
    sub: 'Experience the authentic taste of tradition in every bite. Crafted with the finest ingredients and a legacy of flavor.',
  },
  {
    id: 2,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmyWcQKK8bq75-FGhDPL6-jpeoJupvHEBh8FbEESg45vWy8k59ty-BxIZkmvf_M_0bedYL0amNikPwh1fUdq32GHsmr2o17MmckBaoFMVTlEI-J19-spsCDJBv2EiV7PGGI0-e1Zw7Ai3sDlvp0Je4sYyxSFcjuA33nwmpeEwC2-NDmDc2Ot4PCXcN8TXtZeKUhfgmDEZI_qEHGL6H-5zoa_Lx_4H5AUw6wa0ls5f_vAZz30Lj2w2QxzpBMA7EZ8DlVH-vceggcMM',
    alt: 'All Time Travelling Partner',
    tag: 'Crispy & Fresh',
    headline: ['All Time', 'Travelling Partner'],
    sub: 'Take the crunch with you everywhere. Sealed fresh, made for every journey.',
  },
  {
    id: 3,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkXBkCtJmAOcYbDFi_7EXVqMuQFtzjfjar38X_1fvbgyqK2DjXdgyUyf5tCaUNRskj3jQvwXoOlNTCVi76shQ1VUtcEy_jrsS2ttafTy_btojJJqTOKKHvJnfqNWCwz6-TKqZfOUb1dYxKXxHwzrapvnORhVNsuVLOR-4hz9wtrnZiD5Fke9KMM4Gj0AD5zVQ_d_yfAuZflLY9-quEdtBQ3MpjGRe3AyN01cPIkkOafljVu8JpF5kyA0_qRcDKZNwZz0krd1O3RRo',
    alt: 'Sit Back & Relax',
    tag: 'Perfect Snack Time',
    headline: ['Sit Back', '& Relax'],
    sub: 'The ideal companion for those lazy evenings. Pure joy in every packet.',
  },
]

const CATEGORIES = [
  { icon: 'potato', label: 'Potato Chips', color: '#fef3c7', iconColor: 'var(--brand-yellow)' },
  { icon: 'tapas', label: 'Namkeen', color: '#dcfce7', iconColor: 'var(--brand-green)' },
  { icon: 'fastfood', label: 'Snacks', color: '#fce7f3', iconColor: 'var(--brand-pink)' },
  { icon: 'category', label: 'Fryums', color: '#f3e8ff', iconColor: 'var(--tertiary)' },
]

const SPOTLIGHT_IMGS = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxR554H_bWcTNQqVcQV6FP0F7m7AUSSK7fx-w-oP_5urwUAHl8iXLYoHc_pPLkYmrMopQxWFJjsVbcoMs83U9jkePiiFR3aXn8J8GY-Iu6RF5aH-5Xa3pNg0TPk-duP2vbIStVE41KAF47pf9OVCB-GSXxK9ZVGAimdn5NocjfaFDnDZfFASjuX9qIxVGgqNH6uO9wEI4Eq5a_FcV5u1gg5goaEKUCJFGvgTY2B6LCGmboW9Stx_mL2RQKw7OwDGc03Pcb0nQel7M',
    label: 'Print Campaign',
    labelColor: 'var(--brand-yellow)',
    title: 'A Table Filled With Snacks',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl1GiR-n02JlLmjfDQCSuIC8N-UpLYbYNPPZ9mQom71_N6gzFeTKwT5-oMiaCW0W2u45d0xGWb46qdfOu6o2viaBWwwNZi59EyKteAM6KZMfxnySoOtBS9OrBTzSXO5ooqdAqYRnGhz7Z4VIeIoBdIfs05Knjq0R4uzmmkTwo4J7WC_P_cZG2W_qad9KVg6A-2kYiSsZpP7ICdaEITDS16ExU05-uw04_2qMo6xIdZPBuz4NyUSyg-z0n3sGIguxD5_fHcaglsruc',
    label: 'Social Media',
    labelColor: 'var(--brand-pink)',
    title: 'Swaad Aisa Jo 4 Log Bole Waahhh!!',
  },
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const intervalRef = useRef(null)
  const navigate = useNavigate()

  const goToSlide = (idx) => {
    setActiveSlide(idx)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setActiveSlide(p => (p + 1) % SLIDES.length), 5000)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => setActiveSlide(p => (p + 1) % SLIDES.length), 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div className="home">

      {/* ===== 1. HERO CAROUSEL ===== */}
      <section className="hero" aria-label="Hero carousel">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide ${i === activeSlide ? 'hero__slide--active' : ''}`}
            aria-hidden={i !== activeSlide}
          >
            {/* Background Image */}
            <div className="hero__img-wrap">
              <img src={slide.img} alt={slide.alt} className="hero__img" />
              <div className="hero__img-overlay" />
            </div>
            {/* Content */}
            <div className="hero__content container">
              <div className="hero__glass-card">
                <span className="hero__tag">{slide.tag}</span>
                <h1 className="hero__headline">
                  {slide.headline[0]}<br />
                  <span className="hero__headline-accent">{slide.headline[1]}</span>
                </h1>
                <p className="hero__sub">{slide.sub}</p>
                <div className="hero__btns">
                  <button
                    className="hero__btn hero__btn--primary"
                    id="hero-explore-btn"
                    onClick={() => navigate('/products')}
                  >
                    Explore Products
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="hero__dots" role="tablist">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === activeSlide ? 'hero__dot--active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
              role="tab"
              aria-selected={i === activeSlide}
            />
          ))}
        </div>
      </section>

      {/* ===== 2. WHY CHOOSE VRAJ — Bento Grid ===== */}
      <section className="why-section" aria-labelledby="why-heading">
        {/* Decorative blobs */}
        <div className="why-section__blob why-section__blob--1" />
        <div className="why-section__blob why-section__blob--2" />
        <div className="container why-section__inner">
          <div className="why-section__header">
            <h2 id="why-heading" className="why-section__title">Why Choose Vraj?</h2>
            <p className="why-section__sub">Our commitment to excellence is baked into every batch.</p>
          </div>
          {/* Bento Grid */}
          <div className="bento-grid">
            {/* Large card */}
            <div className="bento-card bento-card--large">
              <div className="bento-card__bg-icon">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div className="bento-card__glass">
                <div className="bento-card__icon-wrap bento-card__icon-wrap--green">
                  <span className="material-symbols-outlined bento-card__icon">workspace_premium</span>
                </div>
                <h3 className="bento-card__title">Uncompromising Quality</h3>
                <p className="bento-card__desc">We source only the finest raw ingredients. Our state-of-the-art facilities ensure that every packet meets rigorous hygiene and taste standards.</p>
              </div>
            </div>
            {/* Small card 1 */}
            <div className="bento-card bento-card--yellow">
              <div className="bento-card__icon-wrap bento-card__icon-wrap--yellow">
                <span className="material-symbols-outlined bento-card__icon">local_fire_department</span>
              </div>
              <div>
                <h3 className="bento-card__title-sm">Authentic Recipes</h3>
                <p className="bento-card__desc-sm">Traditional spice blends passed down through generations.</p>
              </div>
            </div>
            {/* Small card 2 */}
            <div className="bento-card bento-card--green-light">
              <div className="bento-card__icon-wrap bento-card__icon-wrap--green">
                <span className="material-symbols-outlined bento-card__icon">eco</span>
              </div>
              <div>
                <h3 className="bento-card__title-sm">100% Fresh</h3>
                <p className="bento-card__desc-sm">Nitrogen-flushed packaging seals in the crispiness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. PRODUCT CATEGORIES — Poster Grid ===== */}
      <section className="categories-section" aria-labelledby="categories-heading">
        <div className="container">
          <div className="categories-section__header">
            <div>
              <h2 id="categories-heading" className="categories-section__title">Our Assortment</h2>
              <p className="categories-section__sub">A flavor for every mood and every moment.</p>
            </div>
          </div>
          <div className="categories-grid">
            {CATEGORIES.map(({ icon, label, color, iconColor }) => (
              <div
                key={label}
                className="category-poster"
                style={{ backgroundColor: color }}
                onClick={() => navigate('/products')}
                role="button"
                tabIndex={0}
              >
                <div className="category-poster__img-area">
                  <span
                    className="material-symbols-outlined category-poster__icon"
                    style={{ color: iconColor }}
                  >
                    {icon}
                  </span>
                </div>
                <div className="category-poster__overlay" />
                <div className="category-poster__content">
                  <h3 className="category-poster__label">{label}</h3>
                  <span className="category-poster__explore-btn">Explore</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. FAN FAVORITES — Dial Layout ===== */}
      <section className="favorites-section" aria-labelledby="fav-heading">
        <div className="container">
          <div className="favorites-section__header">
            <h2 id="fav-heading" className="favorites-section__title">Fan Favorites</h2>
            <p className="favorites-section__sub">The snacks our customers keep coming back for.</p>
          </div>
          <div className="favorites-dial">
            {/* Decorative ring */}
            <div className="favorites-dial__ring" />
            <div className="favorites-dial__glow" />

            {/* Item 1 */}
            <div className="fav-item fav-item--side">
              <div className="fav-item__img">
                <span className="material-symbols-outlined fav-item__icon">package</span>
              </div>
              <h4 className="fav-item__name">Navratan Mix</h4>
              <div className="fav-item__stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill fav-item__star">star</span>
                ))}
              </div>
            </div>

            {/* Center / Featured Item */}
            <div className="fav-item fav-item--center">
              <div className="fav-item__badge">#1 SELLER</div>
              <div className="fav-item__img fav-item__img--large">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvxRYuBUw0FOSdKgixOxL8l9gxZmBZbYNib389fTGNwnbWhEa_ZGcjymw5A6K9eayOc3PmzFyzVuB-9WNtitu6Bzb_lkgqAac9xhd7G0ItB58rKls6TcxXxcEtLbtCtNZpTpGwtEQICSmLw8Esrt6bsibOZYoixXaE8Fzd2BIJaYnhRqHJ7gv0_GligbvXWB5wIm1uu-PHmhFTg5g6ObnGdIsWmcTRUPuPJchKfyFRdqJf0nxfAjExrjhG15RAfYMlU8eEb10Wji0"
                  alt="Ratlami Sev"
                  className="fav-item__center-img"
                />
              </div>
              <h4 className="fav-item__name fav-item__name--lg">Ratlami Sev</h4>
              <p className="fav-item__desc">Spicy, crunchy, iconic.</p>
              <button className="fav-item__btn" onClick={() => navigate('/products')}>
                View Product
              </button>
            </div>

            {/* Item 3 */}
            <div className="fav-item fav-item--side">
              <div className="fav-item__img">
                <span className="material-symbols-outlined fav-item__icon">package</span>
              </div>
              <h4 className="fav-item__name">Khatta Meetha</h4>
              <div className="fav-item__stars">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill fav-item__star">star</span>
                ))}
                <span className="material-symbols-outlined fav-item__star">star_half</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. PARTNERSHIP CTA ===== */}
      <section className="partner-section" aria-labelledby="partner-heading">
        <div className="container">
          <div className="partner-card">
            {/* Background pattern */}
            <div className="partner-card__pattern" />
            <div className="partner-card__glow" />

            {/* Text */}
            <div className="partner-card__text">
              <span className="partner-card__tag">Join the Network</span>
              <h2 id="partner-heading" className="partner-card__title">Grow With Vraj Namkeen</h2>
              <p className="partner-card__desc">
                We are expanding our distribution network across the country. Partner with a brand that guarantees quality, attractive margins, and consistent support. Let's deliver happiness to every home together.
              </p>
              <div className="partner-card__btns">
                <button
                  className="partner-card__btn partner-card__btn--primary"
                  id="partner-cta-distributor"
                  onClick={() => navigate('/distribution')}
                >
                  Become a Distributor
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="partner-card__btn partner-card__btn--ghost">
                  Download Brochure
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="partner-card__visual">
              <div className="partner-card__circle">
                <span className="material-symbols-outlined fill partner-card__handshake">handshake</span>
                <div className="partner-card__circle-badge">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. IN THE SPOTLIGHT ===== */}
      <section className="spotlight-section" aria-labelledby="spotlight-heading">
        <div className="container">
          <div className="spotlight-section__header">
            <div>
              <h2 id="spotlight-heading" className="spotlight-section__title">In The Spotlight</h2>
              <p className="spotlight-section__sub">Check out our latest campaigns and commercials.</p>
            </div>
            <div className="spotlight-section__nav">
              <button className="spotlight-nav-btn" aria-label="Previous">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="spotlight-nav-btn" aria-label="Next">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="spotlight-grid">
            {SPOTLIGHT_IMGS.map(({ src, label, labelColor, title }) => (
              <div key={title} className="spotlight-card">
                <div className="spotlight-card__img-wrap">
                  <img src={src} alt={title} className="spotlight-card__img" />
                  <div className="spotlight-card__hover-overlay" />
                  <div className="spotlight-card__hover-text">
                    <span className="spotlight-card__label" style={{ color: labelColor }}>{label}</span>
                    <h3 className="spotlight-card__title">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
