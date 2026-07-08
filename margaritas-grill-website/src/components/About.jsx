import SectionHeading from './SectionHeading';
import OrnamentalBorder from './OrnamentalBorder';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <div className="about__visual">
          <OrnamentalBorder>
            {/* REPLACE: restaurant interior or chef photo
                import aboutImage from '../assets/about.jpg'
                then use: <img src={aboutImage} alt="..." /> */}
            <img
              src="https://images.unsplash.com/photo-1559335332-69c3a394bbbc?w=700&h=900&fit=crop"
              alt="Warmly lit Mexican seafood restaurant dining room"
              className="about__image"
              loading="lazy"
            />
          </OrnamentalBorder>
        </div>

        <div className="about__copy">
          <SectionHeading
            eyebrow="Nuestra Historia"
            title="Where the Sea Meets the Desert"
            subtitle="Premium coastal flavors in the heart of Winnemucca"
          />

          <div className="about__text">
            <p>
              Margaritas Grill brings the spirit of Mexico&apos;s Pacific coast to Nevada —
              bold ceviches cured in bright citrus, camarones sizzling in garlic and
              chile, and platillos meant to be shared around the table.
            </p>
            <p>
              Our kitchen honors tradition with a premium touch: fresh seafood daily,
              house-made salsas, and recipes passed through generations — served in a
              space adorned with the warmth of Día de los Muertos celebration.
            </p>
            <p>
              Whether you&apos;re here for a quick lunch or a long evening of margaritas
              and mariscos, every plate is prepared with pride and served con amor.
            </p>
          </div>

          <ul className="about__highlights">
            <li>
              <span className="about__highlight-icon" aria-hidden="true">✦</span>
              Fresh seafood &amp; house-made salsas
            </li>
            <li>
              <span className="about__highlight-icon" aria-hidden="true">✦</span>
              Full bar with craft margaritas
            </li>
            <li>
              <span className="about__highlight-icon" aria-hidden="true">✦</span>
              Family-friendly dining room
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
