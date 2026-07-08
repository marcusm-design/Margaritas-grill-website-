import { navLinks, restaurantInfo } from '../data/menuData';
import { scrollToSection } from '../utils/helpers';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__ornament" aria-hidden="true">
        <span>✦ ✦ ✦</span>
      </div>

      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <h2 className="site-footer__name">{restaurantInfo.name}</h2>
          <p className="site-footer__tagline">{restaurantInfo.tagline}</p>
          <p className="site-footer__address">{restaurantInfo.address}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <a href={restaurantInfo.phoneLink} className="site-footer__phone">
            {restaurantInfo.phone}
          </a>
          <a
            href={restaurantInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__directions"
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>&copy; {year} {restaurantInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
