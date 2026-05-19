import { useState } from 'react'
import './Products.css'

const CATEGORIES = ['All', 'Classic Namkeen', 'Spicy Pellets', 'Corn Puffs', 'Popcorn', 'Extruded Fryums']

const PRODUCTS = [
  { name: 'Sing Bhujiya', category: 'Classic Namkeen', desc: 'Crispy, spiced peanut snacks perfect for any time munching.', price: '₹5.00', badge: 'Best Seller', gradient: 'from-yellow-100 to-yellow-200', icon: 'package_2', iconColor: '#b8860b', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWY-yLf5aTsZ-rgatjFcjjLc7Ob3F-TlES-2N7zAcA_6VV4-pzmn-460BQsQg8V3-hCmxvE4Y_ZvvgZFFtlcN4pdSCX1E1vIfEcMlvfegtkuUd1T8R03hoqSGbXDcuKGd_NEcOIvTuyjk34hLBfIoJVb5iQvm-geOS8DWRaVNOcAyvT5dulOzUainX1UlFMK43UyL7Iy_lKbEzApUgRnBJshDj5uUkXY-BQ8GJNCHHm3-aLYRvEo07lF4wtVGqadgLDOwwnVYQza0', hasImg: true },
  { name: 'Masala Magic Chips', category: 'Spicy Pellets', desc: 'Potato chips tossed in our secret tangy masala blend.', price: '₹5.00', gradient: 'from-blue-100 to-blue-200', icon: 'local_pizza', iconColor: '#3b82f6' },
  { name: 'Tomato Ring', category: 'Extruded Fryums', desc: 'Crunchy ring-shaped fryums with a sweet and tangy tomato flavor.', price: '₹5.00', gradient: 'from-green-100 to-green-200', icon: 'donut_large', iconColor: '#16a34a' },
  { name: 'Chana Dal', category: 'Classic Namkeen', desc: 'Spicy, roasted split chickpea snack. A traditional favorite.', price: '₹5.00', gradient: 'from-orange-100 to-orange-200', icon: 'grain', iconColor: '#ea580c' },
  { name: 'Cheese Balls', category: 'Corn Puffs', desc: 'Air-popped corn puffs with a rich and creamy cheddar cheese coating.', price: '₹5.00', gradient: 'from-amber-100 to-amber-200', icon: 'bakery_dining', iconColor: '#ca8a04' },
  { name: 'Peri Peri Rings', category: 'Spicy Pellets', desc: 'Fiery and zesty rings for those who love an extra kick of spice.', price: '₹5.00', gradient: 'from-red-100 to-red-200', icon: 'fireplace', iconColor: '#dc2626' },
  { name: 'Aloo Bhujia', category: 'Classic Namkeen', desc: 'The timeless classic thin noodles made from potato and chickpea flour.', price: '₹5.00', gradient: 'from-teal-100 to-teal-200', icon: 'set_meal', iconColor: '#0d9488' },
  { name: 'Caramel Crunch', category: 'Popcorn', desc: 'Sweet and buttery popcorn with a perfect golden caramel glaze.', price: '₹5.00', gradient: 'from-purple-100 to-purple-200', icon: 'stars', iconColor: '#9333ea' },
  { name: 'Wheels Classic', category: 'Extruded Fryums', desc: 'Light and crunchy wheel-shaped snacks, a nostalgia trip in every bite.', price: '₹5.00', gradient: 'from-amber-200 to-amber-300', icon: 'lunch_dining', iconColor: '#c2410c' },
  { name: 'Magic Butter', category: 'Popcorn', desc: 'Classic movie-style buttered popcorn, fluffy and delicious.', price: '₹5.00', gradient: 'from-pink-100 to-pink-200', icon: 'icecream', iconColor: '#db2777' },
]

const GRADIENT_MAP = {
  'from-yellow-100 to-yellow-200': 'linear-gradient(135deg, #fef3c7, #fde68a)',
  'from-blue-100 to-blue-200': 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
  'from-green-100 to-green-200': 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
  'from-orange-100 to-orange-200': 'linear-gradient(135deg, #ffedd5, #fed7aa)',
  'from-amber-100 to-amber-200': 'linear-gradient(135deg, #fef3c7, #fde68a)',
  'from-red-100 to-red-200': 'linear-gradient(135deg, #fee2e2, #fecaca)',
  'from-teal-100 to-teal-200': 'linear-gradient(135deg, #ccfbf1, #99f6e4)',
  'from-purple-100 to-purple-200': 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
  'from-amber-200 to-amber-300': 'linear-gradient(135deg, #fde68a, #fcd34d)',
  'from-pink-100 to-pink-200': 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
}

const PER_PAGE = 6

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [modalProduct, setModalProduct] = useState(null)

  const filtered = activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paged = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  const openModal = (product) => { setModalProduct(product); document.body.style.overflow = 'hidden' }
  const closeModal = () => { setModalProduct(null); document.body.style.overflow = '' }

  return (
    <div className="products-page">

      {/* ===== HERO ===== */}
      <section className="products-hero">
        <div className="products-hero__blob products-hero__blob--1" />
        <div className="products-hero__blob products-hero__blob--2" />
        <div className="container products-hero__inner">
          <h1 className="products-hero__title">Our Authentic Snack Collection</h1>
          <p className="products-hero__sub">
            Discover a world of flavor with our carefully crafted namkeens. From timeless classics to bold new crunches, find your perfect snack companion.
          </p>
        </div>
      </section>

      {/* ===== LISTING ===== */}
      <section className="products-listing container">
        {/* Filter Bar */}
        <div className="products-filters hide-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`products-filter-chip ${activeCategory === cat ? 'products-filter-chip--active' : ''}`}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1) }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Info + Sort */}
        <div className="products-toolbar">
          <p className="products-toolbar__count">Showing {paged.length} of {filtered.length} products</p>
          <div className="products-toolbar__sort">
            <span>Sort by:</span>
            <select className="products-toolbar__select">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="products-grid">
          {paged.map((product) => (
            <article
              key={product.name}
              className="product-card"
              onClick={() => openModal(product)}
            >
              <div
                className="product-card__img"
                style={{ background: GRADIENT_MAP[product.gradient] || '#f2ede3' }}
              >
                {product.hasImg ? (
                  <img src={product.img} alt={product.name} className="product-card__photo" />
                ) : (
                  <span className="material-symbols-outlined product-card__icon" style={{ color: `${product.iconColor}80` }}>{product.icon}</span>
                )}
                {product.badge && <span className="product-card__badge">{product.badge}</span>}
              </div>
              <div className="product-card__body">
                <span className="product-card__cat">{product.category}</span>
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.desc}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">{product.price}</span>
                  <button className="product-card__view">
                    View Details <span className="material-symbols-outlined product-card__arrow">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="products-pagination" aria-label="Pagination">
            <button className="products-pagination__btn" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
              <span className="material-symbols-outlined">chevron_left</span> Previous
            </button>
            <div className="products-pagination__pages">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`products-pagination__page ${currentPage === i + 1 ? 'products-pagination__page--active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button className="products-pagination__btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>
              Next <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </nav>
        )}
      </section>

      {/* ===== MODAL ===== */}
      {modalProduct && (
        <div className="product-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
          <div className="product-modal">
            <button className="product-modal__close-mobile" onClick={closeModal}><span className="material-symbols-outlined">close</span></button>
            <div className="product-modal__img" style={{ background: GRADIENT_MAP[modalProduct.gradient] || '#f2ede3' }}>
              {modalProduct.hasImg ? (
                <img src={modalProduct.img} alt={modalProduct.name} className="product-modal__photo" />
              ) : (
                <span className="material-symbols-outlined product-modal__icon" style={{ color: `${modalProduct.iconColor}50` }}>{modalProduct.icon}</span>
              )}
            </div>
            <div className="product-modal__body">
              <div className="product-modal__header">
                <div>
                  <span className="product-modal__cat">{modalProduct.category}</span>
                  <h2 className="product-modal__name">{modalProduct.name}</h2>
                </div>
                <button className="product-modal__close-desktop" onClick={closeModal}><span className="material-symbols-outlined">close</span></button>
              </div>
              <p className="product-modal__price">{modalProduct.price} <span className="product-modal__per">/ pack</span></p>
              <div className="product-modal__details">
                <div>
                  <h4 className="product-modal__label"><span className="material-symbols-outlined product-modal__label-icon">description</span> Description</h4>
                  <p className="product-modal__text">{modalProduct.desc} Experience the authentic taste of tradition. Premium quality ingredients are carefully selected and deep-fried to golden perfection.</p>
                </div>
                <div className="product-modal__specs">
                  <div className="product-modal__spec"><h4 className="product-modal__spec-label">Pack Size</h4><p className="product-modal__spec-val">Standard ₹5 Pouch</p></div>
                  <div className="product-modal__spec"><h4 className="product-modal__spec-label">Shelf Life</h4><p className="product-modal__spec-val">6 Months</p></div>
                </div>
                <div>
                  <h4 className="product-modal__label"><span className="material-symbols-outlined product-modal__label-icon">restaurant</span> Ingredients</h4>
                  <p className="product-modal__ingredients">Premium quality raw materials, Edible Vegetable Oil (Palmolein), Gram Flour (Besan), Spices & Condiments, Edible Common Salt.</p>
                </div>
              </div>
              <div className="product-modal__actions">
                <button className="product-modal__cart-btn"><span className="material-symbols-outlined fill">shopping_cart</span> Add to Order</button>
                <button className="product-modal__fav-btn"><span className="material-symbols-outlined">favorite</span></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
