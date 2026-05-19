import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/Vraj Namkeen Logo.png'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/distribution', label: 'Distribution' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main navigation">

        {/* Brand */}
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <img src={logo} alt="Vraj Namkeen Logo" className="navbar__brand-logo" />
          <span className="navbar__brand-name">Vraj Namkeen</span>
        </NavLink>

        {/* Desktop Nav Pills */}
        <ul className="navbar__links" role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            className="navbar__cta-btn"
            id="navbar-distributor-btn"
            onClick={() => { navigate('/distribution'); closeMenu() }}
          >
            Become a Distributor
            <span className="material-symbols-outlined">storefront</span>
          </button>
          <button
            className="navbar__menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            id="navbar-menu-toggle"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__drawer-links" role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              className="navbar__drawer-cta"
              onClick={() => { navigate('/distribution'); closeMenu() }}
            >
              Become a Distributor
            </button>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div className="navbar__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  )
}
