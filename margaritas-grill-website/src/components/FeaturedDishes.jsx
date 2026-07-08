import { featuredDishes } from '../data/menuData';
import { formatPrice, scrollToSection } from '../utils/helpers';
import SectionHeading from './SectionHeading';
import OrnamentalBorder from './OrnamentalBorder';
import CTAButton from './CTAButton';

export default function FeaturedDishes() {
  return (
    <section id="featured" className="featured section">
      <div className="container">
        <SectionHeading
          eyebrow="Platillos Destacados"
          title="Featured Dishes"
          subtitle="Signature plates from our kitchen — crafted with coastal Mexican flair"
        />

        <div className="featured__grid">
          {featuredDishes.map((dish) => (
            <article key={dish.id} className="featured-card">
              <OrnamentalBorder className="featured-card__frame">
                {/* REPLACE: swap dish.image in src/data/menuData.js with local imports */}
                <div className="featured-card__image-wrap">
                  <img
                    src={dish.image}
                    alt={dish.imageAlt}
                    className="featured-card__image"
                    loading="lazy"
                  />
                  <span className="featured-card__price">{formatPrice(dish.price)}</span>
                </div>
                <div className="featured-card__body">
                  <h3 className="featured-card__name">{dish.name}</h3>
                  <p className="featured-card__description">{dish.description}</p>
                </div>
              </OrnamentalBorder>
            </article>
          ))}
        </div>

        <div className="featured__cta">
          <CTAButton
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#menu');
            }}
          >
            View Full Menu
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
