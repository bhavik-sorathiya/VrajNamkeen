import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsData from '../../../productDescription.json'
import './Products.css'

const CATEGORIES = ['All', 'Potato Chips', 'Namkeen', 'Snacks', 'Fryums']

// Load all product images dynamically from assets folder
const globImages = import.meta.glob('../../assets/vraj-namkeen-product/*.png', { eager: true });
const productImages = {};
for (const path in globImages) {
  // Normalize filename to alphanumeric lowercase to allow robust matching
  const filename = path.split('/').pop().replace('.png', '').toLowerCase().replace(/[^a-z0-9]/g, '');
  productImages[filename] = globImages[path].default || globImages[path];
}

const getProductImage = (name) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (productImages[normalized]) {
    return productImages[normalized];
  }
  // Fallback search
  for (const key in productImages) {
    if (key.includes(normalized) || normalized.includes(key)) {
      return productImages[key];
    }
  }
  return null;
};

const getCategoryStyles = (category) => {
  const cat = (category || '').toLowerCase().trim();
  if (cat.includes('potato') || cat.includes('chips')) {
    return {
      gradient: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', // Amber/Yellow
      icon: 'local_pizza',
      iconColor: '#d97706',
      badgeColor: '#d97706',
      badgeText: 'Potato Chips'
    };
  } else if (cat.includes('namkeen')) {
    return {
      gradient: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)', // Orange
      icon: 'grain',
      iconColor: '#ea580c',
      badgeColor: '#ea580c',
      badgeText: 'Classic Namkeen'
    };
  } else if (cat.includes('snacks')) {
    return {
      gradient: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', // Green
      icon: 'bakery_dining',
      iconColor: '#16a34a',
      badgeColor: '#16a34a',
      badgeText: 'Snacks'
    };
  } else if (cat.includes('fryums')) {
    return {
      gradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)', // Purple
      icon: 'donut_large',
      iconColor: '#9333ea',
      badgeColor: '#9333ea',
      badgeText: 'Fryums'
    };
  }
  return {
    gradient: 'linear-gradient(135deg, #f2ede3 0%, #e5ded2 100%)', // Cream/Gray
    icon: 'package_2',
    iconColor: '#78716c',
    badgeColor: '#78716c',
    badgeText: category
  };
};

const PER_PAGE = 12

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [modalProduct, setModalProduct] = useState(null)
  const navigate = useNavigate()

  const filtered = activeCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category.toLowerCase().trim() === activeCategory.toLowerCase().trim())

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

        {/* Info */}
        <div className="products-toolbar">
          <p className="products-toolbar__count">Showing {paged.length} of {filtered.length} products</p>
        </div>

        {/* Grid */}
        <div className="products-grid">
          {paged.map((product) => {
            const imgUrl = getProductImage(product.name);
            const catStyles = getCategoryStyles(product.category);
            return (
              <article
                key={product.name}
                className="product-card"
                onClick={() => openModal(product)}
              >
                <div
                  className="product-card__img"
                  style={{ background: catStyles.gradient }}
                >
                  {imgUrl ? (
                    <img src={imgUrl} alt={product.name} className="product-card__photo" />
                  ) : (
                    <span className="material-symbols-outlined product-card__icon" style={{ color: `${catStyles.iconColor}80` }}>{catStyles.icon}</span>
                  )}
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{product.name}</h3>
                </div>
              </article>
            );
          })}
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
      {modalProduct && (() => {
        const imgUrl = getProductImage(modalProduct.name);
        const catStyles = getCategoryStyles(modalProduct.category);
        return (
          <div className="product-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
            <div className="product-modal">
              <button className="product-modal__close-mobile" onClick={closeModal}><span className="material-symbols-outlined">close</span></button>
              <div className="product-modal__img" style={{ background: catStyles.gradient }}>
                {imgUrl ? (
                  <img src={imgUrl} alt={modalProduct.name} className="product-modal__photo" />
                ) : (
                  <span className="material-symbols-outlined product-modal__icon" style={{ color: `${catStyles.iconColor}50` }}>{catStyles.icon}</span>
                )}
              </div>
              <div className="product-modal__body">
                <div className="product-modal__header">
                  <div>
                    <span className="product-modal__cat" style={{ backgroundColor: catStyles.badgeColor, color: '#fff' }}>{modalProduct.category}</span>
                    <h2 className="product-modal__name">{modalProduct.name}</h2>
                  </div>
                  <button className="product-modal__close-desktop" onClick={closeModal}><span className="material-symbols-outlined">close</span></button>
                </div>
                
                <div className="product-modal__details">
                  <div>
                    <h4 className="product-modal__label">
                      <span className="material-symbols-outlined product-modal__label-icon">description</span> Description
                    </h4>
                    <p className="product-modal__text">{modalProduct.description}</p>
                  </div>
                  
                  {modalProduct.tasteTags && modalProduct.tasteTags.length > 0 && (
                    <div>
                      <h4 className="product-modal__label">
                        <span className="material-symbols-outlined product-modal__label-icon">restaurant</span> Taste Tags
                      </h4>
                      <div className="product-modal__tags">
                        {modalProduct.tasteTags.map(tag => (
                          <span key={tag} className="product-modal__tag-badge">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="product-modal__actions">
                  <button className="product-modal__cart-btn" onClick={() => { closeModal(); navigate('/contact'); }}>
                    <span className="material-symbols-outlined">mail</span> Contact Us to Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  )
}