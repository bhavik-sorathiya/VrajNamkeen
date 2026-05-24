import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/Vraj Namkeen Logo.png'
import './Footer.css'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        {/* Brand & Copyright */}
        <div className="footer__brand-col">
          <div className="footer__brand-logo-wrap">
            <img src={logo} alt="Vraj Namkeen Logo" className="footer__brand-logo" />
            <span className="footer__brand-name">Vraj Namkeen</span>
          </div>
          <p className="footer__tagline">Har Dil Ki Peheli Pasand</p>
          <p className="footer__copy">© 2024 Vraj Namkeen. All Rights Reserved. Crafted with tradition.</p>
        </div>

        {/* Address Column */}
        <div className="footer__links-col">
          <h4 className="footer__col-title">Our Address</h4>
          <p className="footer__address-text">
            <strong>Vraj Namkeen</strong><br />
            Suraj Farm, At. Chikhodra-388 320,<br />
            Ta. & Dist. Anand, Gujarat (INDIA)
          </p>
          <p className="footer__address-text" style={{ marginTop: '12px' }}>
            <strong>Call:</strong> +91 9879025922, +91 9428076690<br />
            <strong>Email:</strong> hariomnamkeen22@gmail.com
          </p>
        </div>

        {/* Pages */}
        <div className="footer__links-col">
          <h4 className="footer__col-title">Pages</h4>
          <ul>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/products', label: 'Products' },
              { to: '/distribution', label: 'Distribution' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className="footer__link">{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
