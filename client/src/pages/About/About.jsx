import './About.css'

const JOURNEY_ITEMS = [
  { title: 'The Beginning', desc: 'Founded with a simple mission: to bring the authentic taste of homemade namkeen to everyone. We started small, focusing purely on quality and that nostalgic flavor.', bar: 1 },
  { title: 'Growing the Family', desc: 'As word spread, so did our reach. We expanded our product line to include farali, sev, and unique localized flavors, becoming a staple in regional households.', bar: 2 },
  { title: 'Modern Innovation', desc: 'Today, we blend traditional recipes with state-of-the-art manufacturing to ensure every packet of Vraj Namkeen delivers consistent crunch, hygiene, and unparalleled taste.', bar: 3 },
]

const CORE_VALUES = [
  { icon: 'verified', title: 'Uncompromising Quality', desc: 'Using only the finest ingredients, ensuring every bite is consistently premium.', wrap: '1' },
  { icon: 'restaurant_menu', title: 'Authentic Taste', desc: 'Preserving the rich, traditional recipes that define real Indian namkeen.', wrap: '2' },
  { icon: 'lightbulb', title: 'Continuous Innovation', desc: 'Evolving our flavors and packaging to meet modern tastes while honoring roots.', wrap: '3' },
  { icon: 'group', title: 'Customer First', desc: 'Driven by the joy and satisfaction of the families who choose us daily.', wrap: '4' },
]

export default function About() {
  return (
    <div className="about">

      {/* ===== HERO ===== */}
      <section className="about-hero" aria-label="About page hero">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWpmvxpXLR9XERXx2YgUGkhr47BdhoVXXx6OeSpUs6QBgAGAuRZdbEmNjili2HnqYBCQDfMP45zpZfIfji9POrk05ymyY9oH5bsBoI0NTvcvfwqX3_TfUaYPRr_tyQmJoUJ01FzBf7ikcAORd2hjqONBwaQeWdtQFR6XKAHpe3xTRfXDAdM-vRKzucBJArA98-7T2rPZooG3D0_khLuSE_3d5Vq_EcVu-zWtP5x6AqZLxuQ-9NzHA5zRUOTwZf83bc-YazrYS-678"
          alt="Indian Snacks Background"
          className="about-hero__bg-img"
        />
        <div className="about-hero__bg-overlay" />
        <div className="container about-hero__content">
          <div className="about-hero__glass">
            <h1 className="about-hero__headline">
              Har Dil Ki <span className="about-hero__headline-accent">Peheli Pasand</span>
            </h1>
            <p className="about-hero__sub">
              Crafting authentic, crispy moments of joy for every household. Taste the tradition, feel the crunch.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OUR JOURNEY ===== */}
      <section className="journey-section section" aria-labelledby="journey-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="journey-heading" className="section-title">Our Journey</h2>
            <div className="section-bar" />
            <p className="section-sub">
              From a small kitchen to becoming the heart of every Indian family's snack time, our story is baked with love and seasoned with tradition.
            </p>
          </div>

          <div className="journey-layout">
            {/* Left: Cards */}
            <div className="journey-cards">
              {JOURNEY_ITEMS.map(({ title, desc, bar }) => (
                <div key={title} className="journey-card">
                  <div className={`journey-card__bar journey-card__bar--${bar}`} />
                  <h3 className="journey-card__title">{title}</h3>
                  <p className="journey-card__desc">{desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="journey-image-wrap">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB20n2StontQOzehaMAwFGjyJ0yTTBWwOYUHvGzDUj6fSFWgwYHrDbeUWEudWdRGDr3gJA5DqrogPaCvP7zDnnQNmNrxzxCi_1ebxSNzsN7Khn1JgY7T5KxG9CEnoOFq2jj7zfRXOiAwXtPhr3Y5HUhiEuURpzHd48QAeAJ-jnet-Xdugm_GfPXIRRPi_neMXOjlilVCP2K5u7dIARmXgg-vp3vYpQmSEOmC1-Co4MJ2EH3tjcUXDCLWb1UXTE9BoUwYnTXM2sZQ4"
                alt="Assorted Vraj Namkeen Products"
                className="journey-image"
              />
              <div className="journey-image-overlay" />
              <div className="journey-image-badge">
                <span className="journey-image-badge__val">100+</span>
                <span className="journey-image-badge__label">Delicious Varieties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="vm-section section" aria-labelledby="vm-heading">
        <div className="container">
          <h2 id="vm-heading" className="visually-hidden">Vision and Mission</h2>
          <div className="vm-grid">
            <div className="vm-card vm-card--vision">
              <div className="vm-card__bg-icon">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div className="vm-card__icon-wrap">
                <span className="material-symbols-outlined vm-card__icon">visibility</span>
              </div>
              <h3 className="vm-card__title">Our Vision</h3>
              <p className="vm-card__desc">
                To be the globally recognized symbol of authentic Indian snacking, bringing the diverse, vibrant flavors of our heritage to tables across the world while setting the highest standards for quality and hygiene.
              </p>
            </div>
            <div className="vm-card vm-card--mission">
              <div className="vm-card__icon-wrap">
                <span className="material-symbols-outlined vm-card__icon">rocket_launch</span>
              </div>
              <h3 className="vm-card__title">Our Mission</h3>
              <p className="vm-card__desc">
                To delight our consumers every day by crafting high-quality, innovative namkeen products using pure ingredients, traditional recipes, and sustainable practices that ensure "Har Dil Ki Peheli Pasand" remains our truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="values-section section" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="values-heading" className="section-title">Our Core Values</h2>
            <p className="section-sub">The principles that guide every batch we fry, every packet we seal, and every smile we aim to create.</p>
          </div>
          <div className="values-grid">
            {CORE_VALUES.map(({ icon, title, desc, wrap }) => (
              <div key={title} className="value-card">
                <div className={`value-card__icon-wrap value-card__icon-wrap--${wrap}`}>
                  <span className="material-symbols-outlined value-card__icon">{icon}</span>
                </div>
                <h4 className="value-card__title">{title}</h4>
                <p className="value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
