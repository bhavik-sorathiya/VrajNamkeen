import poster2 from '../../assets/banners/poster-2.png'
import poster3 from '../../assets/banners/poster-3.png'
import './About.css'

const JOURNEY_ITEMS = [
  { title: 'Authentic Charotar Recipes', desc: 'We at Vraj Namkeen always use the best quality ingredients and freshly ground spices to bring you "The Asli Taste of Charotar Namkeen", made using the most authentic traditional recipes.', bar: 1 },
  { title: 'Consistent Quality & Best Taste', desc: 'Extremely popular across all age groups due to our consistent quality and tongue-tingling taste. Every batch is seasoned with freshly ground spices and manufactured under strict hygiene.', bar: 2 },
  { title: 'Expanding Vision', desc: 'Our vision is to make Vraj Namkeen popular all over India and abroad. We are continuously adding new products in our namkeen, potato chips, and snack foods range.', bar: 3 },
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
          src={poster2}
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

      {/* ===== WELCOME SECTION ===== */}
      <section className="about-welcome section" aria-labelledby="welcome-heading">
        <div className="container">
          <div className="about-welcome__glass">
            <h2 id="welcome-heading" className="about-welcome__title">
              Welcome to the world of <span className="about-welcome__title-accent">Tasty Treat</span>
            </h2>
            <div className="section-bar" style={{ margin: '1rem auto' }} />
            <p className="about-welcome__lead">
              The World of Vraj Namkeen, Potato Chips and Snack Foods
            </p>
            <p className="about-welcome__text">
              We are sure that Best Quality, Tongue Tingling Taste and Range of products will lead us towards No. 1 Position in the snacks food market in very near future.
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
                src={poster3}
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
