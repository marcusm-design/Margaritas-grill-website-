import { restaurantInfo } from '../data/menuData';
import SectionHeading from './SectionHeading';
import OrnamentalBorder from './OrnamentalBorder';
import CTAButton from './CTAButton';

export default function Location() {
  return (
    <section id="location" className="location section">
      <div className="container location__grid">
        <div className="location__info">
          <SectionHeading
            eyebrow="Visítanos"
            title="Location & Hours"
            subtitle="Find us on Main Street in Winnemucca"
          />

          <OrnamentalBorder className="location__details">
            <address className="location__address">
              <strong>{restaurantInfo.name}</strong>
              <span>{restaurantInfo.address}</span>
              <a href={restaurantInfo.phoneLink}>{restaurantInfo.phone}</a>
            </address>

            <dl className="location__hours">
              {restaurantInfo.hours.map(({ days, time }) => (
                <div key={days} className="location__hours-row">
                  <dt>{days}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>

            <div className="location__actions">
              <CTAButton href={restaurantInfo.phoneLink} variant="secondary">
                Call Now
              </CTAButton>
              <CTAButton href={restaurantInfo.mapsUrl} variant="outline">
                Get Directions
              </CTAButton>
            </div>
          </OrnamentalBorder>
        </div>

        <div className="location__map-wrap">
          <OrnamentalBorder className="location__map-frame">
            {/* REPLACE: embed your Google Maps iframe or static map image */}
            <iframe
              title="Margaritas Grill location map"
              className="location__map"
              src="https://maps.google.com/maps?q=1234+Main+Street+Winnemucca+Nevada&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </OrnamentalBorder>
        </div>
      </div>
    </section>
  );
}
