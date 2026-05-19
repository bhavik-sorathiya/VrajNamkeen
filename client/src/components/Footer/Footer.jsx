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

        {/* Company Links */}
        <div className="footer__links-col">
          <h4 className="footer__col-title">Company</h4>
          <ul>
            {['Privacy Policy', 'Terms of Service', 'Manufacturing Units'].map(label => (
              <li key={label}><a href="#" className="footer__link">{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Explore Links */}
        <div className="footer__links-col">
          <h4 className="footer__col-title">Explore</h4>
          <ul>
            {['Quality Standards', 'Career', 'Refund Policy', 'FAQ'].map(label => (
              <li key={label}><a href="#" className="footer__link">{label}</a></li>
            ))}
          </ul>
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
