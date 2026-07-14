import { useState, useEffect } from 'react';
import { navLinks, restaurantInfo } from '../data/menuData';
import { scrollToSection } from '../utils/helpers';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner container">
        <a
          href="#home"
          className="site-header__logo"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <span className="site-header__logo-mark" aria-hidden="true">✦</span>
          <span className="site-header__logo-text">{restaurantInfo.name}</span>
        </a>

        <nav className={`site-header__nav ${menuOpen ? 'site-header__nav--open' : ''}`} aria-label="Main">
          <ul className="site-header__nav-list">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`site-header__toggle ${menuOpen ? 'site-header__toggle--open' : ''}`}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
