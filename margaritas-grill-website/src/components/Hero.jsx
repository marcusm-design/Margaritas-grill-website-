import { restaurantInfo } from '../data/menuData';
import { scrollToSection } from '../utils/helpers';
import CTAButton from './CTAButton';
import OrnamentalBorder from './OrnamentalBorder';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* REPLACE: background hero image — add url('/src/assets/hero.jpg') to .hero in CSS */}
      <div className="hero__backdrop" aria-hidden="true" />

      <div className="hero__content container">
        <OrnamentalBorder className="hero__frame">
          <p className="hero__eyebrow">Winnemucca, Nevada</p>
          <h1 className="hero__title">{restaurantInfo.name}</h1>
          <p className="hero__tagline">{restaurantInfo.tagline}</p>
          <p className="hero__intro">
            Fresh-from-the-coast Mexican seafood — ceviches, camarones, and sizzling
            platillos served with warmth, tradition, and a touch of celebration.
          </p>

          <div className="hero__actions">
            <CTAButton
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#menu');
              }}
            >
              View Menu
            </CTAButton>
            <CTAButton href={restaurantInfo.phoneLink} variant="secondary">
              Call Now
            </CTAButton>
            <CTAButton href={restaurantInfo.mapsUrl} variant="outline">
              Get Directions
            </CTAButton>
          </div>
        </OrnamentalBorder>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Scroll to about section">
        <span>Discover</span>
        <span className="hero__scroll-arrow">↓</span>
      </a>
    </section>
  );
}
