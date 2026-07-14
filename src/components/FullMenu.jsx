import { useMemo, useState } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import SectionHeading from './SectionHeading';
import MenuRow from './MenuRow';
import OrnamentalBorder from './OrnamentalBorder';

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeLabel =
    menuCategories.find((cat) => cat.id === activeCategory)?.label ?? 'All';

  return (
    <section id="menu" className="menu section">
      <div className="container">
        <SectionHeading
          eyebrow="La Carta"
          title="Full Menu"
          subtitle="Browse by category — every item prepared fresh to order"
        />

        <div className="menu__filters" role="tablist" aria-label="Menu categories">
          {menuCategories.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeCategory === id}
              className={`menu__filter ${activeCategory === id ? 'menu__filter--active' : ''}`}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <OrnamentalBorder className="menu__panel">
          <div className="menu__panel-header">
            <h3 className="menu__panel-title">{activeLabel}</h3>
            <span className="menu__panel-count">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          <div className="menu__list" role="tabpanel">
            {filteredItems.map((item) => (
              <MenuRow
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </OrnamentalBorder>
      </div>
    </section>
  );
}
