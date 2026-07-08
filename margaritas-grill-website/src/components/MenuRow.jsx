import { formatPrice } from '../utils/helpers';

export default function MenuRow({ name, description, price }) {
  return (
    <article className="menu-row">
      <div className="menu-row__header">
        <h3 className="menu-row__name">{name}</h3>
        <span className="menu-row__leader" aria-hidden="true" />
        <span className="menu-row__price">{formatPrice(price)}</span>
      </div>
      {description && <p className="menu-row__description">{description}</p>}
    </article>
  );
}
